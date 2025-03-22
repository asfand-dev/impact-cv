
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { 
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { Checkbox } from '@/components/ui/checkbox';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { BookUp, GripVertical } from 'lucide-react';
import { CVData } from '@/lib/types';
import { toast } from 'sonner';

interface ConfigurationPanelProps {
  cvData: CVData;
  onChange: (data: CVData) => void;
}

export function AddSection({ cvData, onChange }: ConfigurationPanelProps) {
  const [open, setOpen] = useState(false);
  const [sectionConfig, setSectionConfig] = useState({
    visibility: true,
    title: '',
  })

  const handleApplyChanges = () => {
    const newSectionKey = sectionConfig.title.split(' ').join('').toLocaleLowerCase()
    onChange({
      ...cvData,
      [newSectionKey]: [],
      sectionConfig: {
        ...cvData.sectionConfig,
        visibility: {
          ...cvData.sectionConfig.visibility,
          [newSectionKey]: sectionConfig.visibility
        },
        titles: {
          ...cvData.sectionConfig.titles,
          [newSectionKey]: sectionConfig.title
        },
        order: [...cvData.sectionConfig.order, newSectionKey],
      }
    })
    toast.success('CV configuration applied successfully');
    setOpen(false);
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button 
          variant="outline" 
          className="w-full flex items-center gap-2 justify-center"
        >
          <BookUp className="h-4 w-4" />
          <span>Add New Section</span>
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Add New Section</DialogTitle>
          <DialogDescription>
            Customize visibility, title, and order of your CV section.
          </DialogDescription>
        </DialogHeader>
        <div className="py-4 space-y-6 max-h-[60vh] overflow-y-auto">
          <div className="space-y-4">
            <h3 className="text-sm font-medium">Section Order & Visibility</h3>
            <div className="grid gap-4">
                <div 
                  className="flex items-center gap-3 p-3 bg-gray-50 rounded-md border"
                >
                  <div className="flex items-center">
                    <GripVertical className="h-5 w-5 text-gray-400" />
                  </div>
                  <div className="flex-1 space-y-2">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <Checkbox 
                          id={`new-section`}
                          checked={sectionConfig.visibility}
                          onCheckedChange={() => setSectionConfig((prev)=>({ ...prev, visibility: !prev.visibility }))}
                        />
                        <Label htmlFor={`new-section`} className="font-medium capitalize">
                          {sectionConfig.title ?? 'Section Title'}
                        </Label>
                      </div>
                      <div className="flex items-center space-x-1">
                      </div>
                    </div>
                    <div>
                      <Input
                        id={`new-title`}
                        value={sectionConfig.title}
                        onChange={(e) => setSectionConfig((prev)=>({ ...prev, title: e.target.value }))}
                        placeholder={'Section Title'}
                        className="h-8 text-sm"
                      />
                    </div>
                  </div>
                </div>
            </div>
          </div>
        </div>
        <DialogFooter>
          <Button type="button" variant="outline" onClick={() => setOpen(false)}>
            Cancel
          </Button>
          <Button type="button" onClick={handleApplyChanges}>
            Apply Changes
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
