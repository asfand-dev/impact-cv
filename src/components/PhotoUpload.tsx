
import { useState, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Upload, X, Camera, User } from 'lucide-react';
import { BasicInfo } from '@/lib/types';
import { toast } from 'sonner';

interface PhotoUploadProps {
  basicInfo: BasicInfo;
  onChange: (data: BasicInfo) => void;
}

export function PhotoUpload({ basicInfo, onChange }: PhotoUploadProps) {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [dragActive, setDragActive] = useState(false);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      processImage(file);
    }
  };

  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(true);
  };

  const handleDragLeave = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
  };

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      processImage(e.dataTransfer.files[0]);
    }
  };

  const processImage = (file: File) => {
    // Check file type
    if (!file.type.startsWith('image/')) {
      toast.error('Please upload an image file');
      return;
    }

    // Check file size (limit to 2MB)
    if (file.size > 2 * 1024 * 1024) {
      toast.error('Image size should be less than 2MB');
      return;
    }

    const reader = new FileReader();
    reader.onload = (e) => {
      const base64Data = e.target?.result as string;
      onChange({ ...basicInfo, photo: base64Data });
      toast.success('Photo uploaded successfully');
    };
    reader.onerror = () => {
      toast.error('Failed to read the image file');
    };
    reader.readAsDataURL(file);
  };

  const handleRemovePhoto = () => {
    onChange({ ...basicInfo, photo: undefined });
    toast.success('Photo removed');
  };

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h3 className="text-sm font-medium">Profile Photo</h3>
        {basicInfo.photo && (
          <Button 
            variant="ghost" 
            size="sm" 
            onClick={handleRemovePhoto}
            className="h-8 px-2 text-xs text-red-500 hover:text-red-600 hover:bg-red-50"
          >
            <X className="h-3.5 w-3.5 mr-1" />
            Remove
          </Button>
        )}
      </div>

      <div 
        className={`relative rounded-lg border-2 border-dashed p-4 transition-all ${
          dragActive ? 'border-primary bg-primary/5' : 'border-gray-200'
        }`}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
      >
        <div className="flex flex-col items-center justify-center py-4 text-center">
          {basicInfo.photo ? (
            <div className="mb-3 group relative">
              <Avatar className="h-24 w-24 border-2 border-white shadow-md">
                <AvatarImage src={basicInfo.photo} alt={basicInfo.name} />
                <AvatarFallback>{basicInfo.name.substring(0, 2).toUpperCase()}</AvatarFallback>
              </Avatar>
              <div 
                className="absolute inset-0 bg-black/40 rounded-full opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity cursor-pointer"
                onClick={() => fileInputRef.current?.click()}
              >
                <Camera className="h-6 w-6 text-white" />
              </div>
            </div>
          ) : (
            <Avatar className="h-20 w-20 mb-4 bg-gray-100 justify-center items-center">
              <User className="h-10 w-10 text-gray-400" />
            </Avatar>
          )}
          
          <div className="space-y-2">
            <h4 className="text-sm font-medium">
              {basicInfo.photo ? 'Change photo' : 'Upload a photo'}
            </h4>
            <p className="text-xs text-gray-500">
              Drag and drop or click to upload
            </p>
            <Button 
              type="button" 
              variant="outline" 
              size="sm" 
              className="mt-2"
              onClick={() => fileInputRef.current?.click()}
            >
              <Upload className="h-3.5 w-3.5 mr-1" />
              <span>Browse</span>
            </Button>
          </div>
          <input
            ref={fileInputRef}
            type="file"
            accept="image/*"
            onChange={handleFileChange}
            className="hidden"
          />
        </div>
      </div>
      <p className="text-xs text-gray-500">
        Recommended: Square image, max 2MB. Your photo will enhance your CV's personal touch.
      </p>
    </div>
  );
}
