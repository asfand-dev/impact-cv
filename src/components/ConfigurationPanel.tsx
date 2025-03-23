
import { useState, useEffect } from 'react';
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
import { Settings, MoveVertical, GripVertical, MoveUp, MoveDown, Trash2Icon } from 'lucide-react';
import { SectionConfig, SectionVisibility, SectionTitles, SectionOrder, CVData } from '@/lib/types';
import { toast } from 'sonner';

interface ConfigurationPanelProps {
  cvData: CVData;
  onChange: (data: CVData) => void;
}

export function ConfigurationPanel({ cvData, onChange }: ConfigurationPanelProps) {
  const [open, setOpen] = useState(false);
  
  const defaultSectionConfig: SectionConfig = {
    visibility: {
      basicInfo: true,
      summary: true,
      experiences: true,
      education: true,
      skills: true,
      projects: true
    },
    titles: {
      summary: 'Summary',
      experiences: 'Experience',
      education: 'Education',
      skills: 'Skills',
      projects: 'Projects'
    },
    order: ['summary', 'experiences', 'education', 'skills', 'projects']
  };

  const [sectionConfig, setSectionConfig] = useState<SectionConfig>(
    cvData.sectionConfig || defaultSectionConfig
  );

  // Initialize sectionConfig from cvData if available
  useEffect(() => {
    if (cvData.sectionConfig) {
      setSectionConfig(cvData.sectionConfig);
    }
  }, [cvData.sectionConfig]);

  const handleToggleSection = (section: keyof SectionVisibility) => {
    setSectionConfig(prev => ({
      ...prev,
      visibility: {
        ...prev.visibility,
        [section]: !prev.visibility[section]
      }
    }));
  };

  const handleTitleChange = (section: keyof SectionTitles, value: string) => {
    setSectionConfig(prev => ({
      ...prev,
      titles: {
        ...prev.titles,
        [section]: value
      }
    }));
  };

  const handleRemoveSection = (section: string) => {
      const newSectionConfig = { ...sectionConfig };
      delete newSectionConfig.visibility[section];
      delete newSectionConfig.titles[section];
      newSectionConfig.order = newSectionConfig.order.filter(item => item !== section);
      const newCvData = { ...cvData };
      delete newCvData[section];
      onChange({
        ...newCvData,
        sectionConfig: newSectionConfig
      });
  };

  const moveSection = (index: number, direction: 'up' | 'down') => {
    const newOrder = [...sectionConfig.order];
    if (direction === 'up' && index > 0) {
      [newOrder[index], newOrder[index - 1]] = [newOrder[index - 1], newOrder[index]];
    } else if (direction === 'down' && index < newOrder.length - 1) {
      [newOrder[index], newOrder[index + 1]] = [newOrder[index + 1], newOrder[index]];
    }
    setSectionConfig(prev => ({
      ...prev,
      order: newOrder
    }));
  };

  const handleApplyChanges = () => {
    onChange({
      ...cvData,
      sectionConfig
    });
    toast.success('CV configuration applied successfully');
    setOpen(false);
  };

  const showDeleteButton = (key: string) => ![
    'basicInfo',
    'summary',
    'experiences',
    'education',
    'skills',
    'projects'
  ].includes(key);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button variant="link">
          <Settings className="h-4 w-4" />
          <span>Configure Sections</span>
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Configure CV Sections</DialogTitle>
          <DialogDescription>
            Customize visibility, titles, and order of your CV sections.
          </DialogDescription>
        </DialogHeader>
        <div className="py-4 space-y-6 max-h-[60vh] overflow-y-auto">
          <div className="space-y-4">
            <h3 className="text-sm font-medium">Section Order & Visibility</h3>
            <div className="grid gap-4">
              {sectionConfig.order.map((sectionKey, index) => (
                <div 
                  key={sectionKey}
                  className="flex items-center gap-3 p-3 bg-gray-50 rounded-md border"
                >
                  <div className="flex items-center">
                    <GripVertical className="h-5 w-5 text-gray-400" />
                  </div>
                  <div className="flex-1 space-y-2">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <Checkbox 
                          id={`${sectionKey}-section`}
                          checked={sectionConfig.visibility[sectionKey]}
                          onCheckedChange={() => handleToggleSection(sectionKey)}
                        />
                        <Label htmlFor={`${sectionKey}-section`} className="font-medium capitalize">
                          {sectionKey}
                        </Label>
                      </div>
                      <div className="flex items-center space-x-1">
                        {showDeleteButton(sectionKey) && <Button 
                          variant="ghost" 
                          size="sm" 
                          onClick={() => handleRemoveSection(sectionKey)}
                          className="h-8 w-8 p-0"
                        >
                          <Trash2Icon color='red' className="h-4 w-4" />
                        </Button>}
                        <Button 
                          variant="ghost" 
                          size="sm" 
                          onClick={() => moveSection(index, 'up')}
                          disabled={index === 0}
                          className="h-8 w-8 p-0"
                        >
                          <MoveUp className="h-4 w-4" />
                        </Button>
                        <Button 
                          variant="ghost" 
                          size="sm" 
                          onClick={() => moveSection(index, 'down')}
                          disabled={index === sectionConfig.order.length - 1}
                          className="h-8 w-8 p-0"
                        >
                          <MoveDown className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                    <div>
                      <Input
                        id={`${sectionKey}-title`}
                        value={sectionConfig.titles[sectionKey]}
                        onChange={(e) => handleTitleChange(sectionKey, e.target.value)}
                        placeholder={`${sectionKey.charAt(0).toUpperCase() + sectionKey.slice(1)} Title`}
                        className="h-8 text-sm"
                      />
                    </div>
                  </div>
                </div>
              ))}
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
