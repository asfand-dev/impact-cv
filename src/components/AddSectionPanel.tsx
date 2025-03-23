
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
  const [sectionConfig, setSectionConfig] = useState({ visibility: true, title: '' })

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
    setSectionConfig({ visibility: true, title: '' });
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button variant="link">
          <BookUp className="h-4 w-4" />
          <span>Add New Section</span>
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Add New Section</DialogTitle>
          <DialogDescription>
            The new section will appear next to the other sections like Skills
          </DialogDescription>
        </DialogHeader>
        <div className="py-4 space-y-6 max-h-[60vh] overflow-y-auto">
          <div className="space-y-4">
            <h3 className="text-sm font-medium">Section Title</h3>
            <div className="flex items-center gap-3 p-3">
              <div className="flex-1 space-y-2">
                  <Input
                    id={`new-title`}
                    value={sectionConfig.title}
                    onChange={(e) => setSectionConfig((prev) => ({ ...prev, title: e.target.value }))}
                    placeholder={'Section Title'}
                    className="h-8 text-md"
                  />
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
