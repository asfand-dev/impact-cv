
import { useState } from 'react';
import { EducationItem } from '@/lib/types';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Checkbox } from '@/components/ui/checkbox';
import { 
  GraduationCap, 
  Building, 
  MapPin,
  Calendar,
  Plus,
  Trash2,
  MoveUp,
  MoveDown,
  Edit
} from 'lucide-react';
import { generateId } from '@/lib/utils';

interface EducationProps {
  data: EducationItem[];
  onChange: (data: EducationItem[]) => void;
}

export function Education({ data, onChange }: EducationProps) {
  const [activeId, setActiveId] = useState<string | null>(null);

  const handleAddEducation = () => {
    const newItem: EducationItem = {
      id: generateId(),
      degree: '',
      institute: '',
      location: '',
      startDate: '',
      endDate: '',
    };
    onChange([...data, newItem]);
    setActiveId(newItem.id);
  };

  const handleRemoveEducation = (id: string) => {
    onChange(data.filter(item => item.id !== id));
    if (activeId === id) {
      setActiveId(null);
    }
  };

  const handleMoveUp = (index: number) => {
    if (index > 0) {
      const newData = [...data];
      [newData[index - 1], newData[index]] = [newData[index], newData[index - 1]];
      onChange(newData);
    }
  };

  const handleMoveDown = (index: number) => {
    if (index < data.length - 1) {
      const newData = [...data];
      [newData[index], newData[index + 1]] = [newData[index + 1], newData[index]];
      onChange(newData);
    }
  };

  const handleUpdateEducation = (id: string, field: keyof EducationItem, value: any) => {
    onChange(
      data.map(item => 
        item.id === id 
          ? { ...item, [field]: value } 
          : item
      )
    );
  };

  const handleCurrentChange = (id: string, checked: boolean) => {
    onChange(
      data.map(item => 
        item.id === id 
          ? { ...item, current: checked, endDate: checked ? '' : item.endDate } 
          : item
      )
    );
  };

  return (
    <div className="space-y-6">
      <div className="space-y-4">
        {data.map((education, index) => (
          <Card 
            key={education.id}
            className={`bg-white/50 backdrop-blur-sm border shadow-sm transition-all duration-200 ${activeId === education.id ? 'border-primary/30 ring-2 ring-primary/10' : 'border-gray-100 hover:border-gray-200'}`}
          >
            <CardContent className="pt-4">
              <div className="flex justify-between items-center mb-4">
                <div className="font-medium">
                  {education.degree || 'New Education'} 
                  {education.institute && ` at ${education.institute}`}
                </div>
                <div className="flex space-x-1">
                  <Button 
                    variant="ghost" 
                    size="icon" 
                    className="h-8 w-8 text-muted-foreground hover:text-foreground"
                    onClick={() => setActiveId(activeId === education.id ? null : education.id)}
                  >
                    <Edit className="h-4 w-4" />
                  </Button>
                  <Button 
                    variant="ghost" 
                    size="icon" 
                    className="h-8 w-8 text-muted-foreground hover:text-foreground"
                    onClick={() => handleMoveUp(index)}
                    disabled={index === 0}
                  >
                    <MoveUp className="h-4 w-4" />
                  </Button>
                  <Button 
                    variant="ghost" 
                    size="icon" 
                    className="h-8 w-8 text-muted-foreground hover:text-foreground"
                    onClick={() => handleMoveDown(index)}
                    disabled={index === data.length - 1}
                  >
                    <MoveDown className="h-4 w-4" />
                  </Button>
                  <Button 
                    variant="ghost" 
                    size="icon" 
                    className="h-8 w-8 text-destructive/70 hover:text-destructive"
                    onClick={() => handleRemoveEducation(education.id)}
                  >
                    <Trash2 className="h-4 w-4" />
                  </Button>
                </div>
              </div>

              {activeId === education.id && (
                <div className="space-y-4">
                  <div className="space-y-2">
                    <div className="flex items-center">
                      <GraduationCap className="w-4 h-4 mr-2 text-muted-foreground" />
                      <Label htmlFor={`degree-${education.id}`} className="text-sm font-medium">Degree</Label>
                    </div>
                    <Input
                      id={`degree-${education.id}`}
                      value={education.degree}
                      onChange={(e) => handleUpdateEducation(education.id, 'degree', e.target.value)}
                      placeholder="Bachelor's Degree in Computer Science"
                      className="transition-all duration-200 focus:ring-2 focus:ring-primary/10"
                    />
                  </div>

                  <div className="space-y-2">
                    <div className="flex items-center">
                      <Building className="w-4 h-4 mr-2 text-muted-foreground" />
                      <Label htmlFor={`institute-${education.id}`} className="text-sm font-medium">Institute Name</Label>
                    </div>
                    <Input
                      id={`institute-${education.id}`}
                      value={education.institute}
                      onChange={(e) => handleUpdateEducation(education.id, 'institute', e.target.value)}
                      placeholder="Institute of Business and Management Science"
                      className="transition-all duration-200 focus:ring-2 focus:ring-primary/10"
                    />
                  </div>

                  <div className="space-y-2">
                    <div className="flex items-center">
                      <MapPin className="w-4 h-4 mr-2 text-muted-foreground" />
                      <Label htmlFor={`location-${education.id}`} className="text-sm font-medium">Location</Label>
                    </div>
                    <Input
                      id={`location-${education.id}`}
                      value={education.location}
                      onChange={(e) => handleUpdateEducation(education.id, 'location', e.target.value)}
                      placeholder="Peshawar, Pakistan"
                      className="transition-all duration-200 focus:ring-2 focus:ring-primary/10"
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <div className="flex items-center">
                        <Calendar className="w-4 h-4 mr-2 text-muted-foreground" />
                        <Label htmlFor={`startDate-${education.id}`} className="text-sm font-medium">Start Date</Label>
                      </div>
                      <Input
                        id={`startDate-${education.id}`}
                        type="month"
                        value={education.startDate}
                        onChange={(e) => handleUpdateEducation(education.id, 'startDate', e.target.value)}
                        className="transition-all duration-200 focus:ring-2 focus:ring-primary/10"
                      />
                    </div>

                    <div className="space-y-2">
                      <div className="flex items-center">
                        <Calendar className="w-4 h-4 mr-2 text-muted-foreground" />
                        <Label htmlFor={`endDate-${education.id}`} className="text-sm font-medium">End Date</Label>
                      </div>
                      <Input
                        id={`endDate-${education.id}`}
                        type="month"
                        value={education.endDate}
                        onChange={(e) => handleUpdateEducation(education.id, 'endDate', e.target.value)}
                        disabled={education.current}
                        className="transition-all duration-200 focus:ring-2 focus:ring-primary/10"
                      />
                    </div>
                  </div>

                  <div className="flex items-center space-x-2">
                    <Checkbox 
                      id={`current-${education.id}`}
                      checked={education.current || false}
                      onCheckedChange={(checked) => handleCurrentChange(education.id, checked as boolean)}
                    />
                    <Label htmlFor={`current-${education.id}`} className="text-sm font-medium">
                      I am currently studying here
                    </Label>
                  </div>
                </div>
              )}
            </CardContent>
          </Card>
        ))}
      </div>

      <Button 
        variant="outline" 
        onClick={handleAddEducation}
        className="w-full flex items-center justify-center"
      >
        <Plus className="mr-2 h-4 w-4" /> Add Education
      </Button>
    </div>
  );
}
