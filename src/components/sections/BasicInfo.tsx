
import { useState } from 'react';
import { BasicInfo as BasicInfoType } from '@/lib/types';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent } from '@/components/ui/card';
import { PhotoUpload } from '@/components/PhotoUpload';
import { 
  User, 
  Briefcase, 
  MapPin, 
  Mail, 
  Globe, 
  Phone, 
  Github, 
  Linkedin 
} from 'lucide-react';

interface BasicInfoProps {
  data: BasicInfoType;
  onChange: (data: BasicInfoType) => void;
}

export function BasicInfo({ data, onChange }: BasicInfoProps) {
  const handleChange = (field: keyof BasicInfoType, value: string) => {
    onChange({ ...data, [field]: value });
  };

  return (
    <Card className="bg-white/50 backdrop-blur-sm border border-gray-100 shadow-sm">
      <CardContent className="pt-6 space-y-6">
        <PhotoUpload 
          basicInfo={data}
          onChange={onChange}
        />

        <div className="space-y-2">
          <div className="flex items-center">
            <User className="w-4 h-4 mr-2 text-muted-foreground" />
            <Label htmlFor="name" className="text-sm font-medium">Name</Label>
          </div>
          <Input
            id="name"
            value={data.name}
            onChange={(e) => handleChange('name', e.target.value)}
            placeholder="Jane Doe"
            className="transition-all duration-200 focus:ring-2 focus:ring-primary/10"
          />
        </div>

        <div className="space-y-2">
          <div className="flex items-center">
            <Briefcase className="w-4 h-4 mr-2 text-muted-foreground" />
            <Label htmlFor="role" className="text-sm font-medium">Role</Label>
          </div>
          <Input
            id="role"
            value={data.role}
            onChange={(e) => handleChange('role', e.target.value)}
            placeholder="Senior Frontend Developer"
            className="transition-all duration-200 focus:ring-2 focus:ring-primary/10"
          />
        </div>

        <div className="space-y-2">
          <div className="flex items-center">
            <MapPin className="w-4 h-4 mr-2 text-muted-foreground" />
            <Label htmlFor="location" className="text-sm font-medium">Location</Label>
          </div>
          <Input
            id="location"
            value={data.location}
            onChange={(e) => handleChange('location', e.target.value)}
            placeholder="San Francisco, CA"
            className="transition-all duration-200 focus:ring-2 focus:ring-primary/10"
          />
        </div>

        <div className="space-y-2">
          <div className="flex items-center">
            <Mail className="w-4 h-4 mr-2 text-muted-foreground" />
            <Label htmlFor="email" className="text-sm font-medium">Email</Label>
          </div>
          <Input
            id="email"
            type="email"
            value={data.email}
            onChange={(e) => handleChange('email', e.target.value)}
            placeholder="jane.doe@example.com"
            className="transition-all duration-200 focus:ring-2 focus:ring-primary/10"
          />
        </div>

        <div className="space-y-2">
          <div className="flex items-center">
            <Globe className="w-4 h-4 mr-2 text-muted-foreground" />
            <Label htmlFor="website" className="text-sm font-medium">Website (Optional)</Label>
          </div>
          <Input
            id="website"
            value={data.website || ''}
            onChange={(e) => handleChange('website', e.target.value)}
            placeholder="www.janedoe.dev"
            className="transition-all duration-200 focus:ring-2 focus:ring-primary/10"
          />
        </div>

        <div className="space-y-2">
          <div className="flex items-center">
            <Phone className="w-4 h-4 mr-2 text-muted-foreground" />
            <Label htmlFor="phone" className="text-sm font-medium">Phone (Optional)</Label>
          </div>
          <Input
            id="phone"
            value={data.phone || ''}
            onChange={(e) => handleChange('phone', e.target.value)}
            placeholder="+1 (555) 123-4567"
            className="transition-all duration-200 focus:ring-2 focus:ring-primary/10"
          />
        </div>

        <div className="space-y-2">
          <div className="flex items-center">
            <Github className="w-4 h-4 mr-2 text-muted-foreground" />
            <Label htmlFor="github" className="text-sm font-medium">GitHub (Optional)</Label>
          </div>
          <Input
            id="github"
            value={data.github || ''}
            onChange={(e) => handleChange('github', e.target.value)}
            placeholder="github.com/janedoe"
            className="transition-all duration-200 focus:ring-2 focus:ring-primary/10"
          />
        </div>

        <div className="space-y-2">
          <div className="flex items-center">
            <Linkedin className="w-4 h-4 mr-2 text-muted-foreground" />
            <Label htmlFor="linkedin" className="text-sm font-medium">LinkedIn (Optional)</Label>
          </div>
          <Input
            id="linkedin"
            value={data.linkedin || ''}
            onChange={(e) => handleChange('linkedin', e.target.value)}
            placeholder="linkedin.com/in/janedoe"
            className="transition-all duration-200 focus:ring-2 focus:ring-primary/10"
          />
        </div>
      </CardContent>
    </Card>
  );
}
