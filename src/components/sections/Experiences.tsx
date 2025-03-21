
import { useState } from 'react';
import { ExperienceItem } from '@/lib/types';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Checkbox } from '@/components/ui/checkbox';
import { 
  Briefcase, 
  Building, 
  Calendar, 
  ListChecks,
  Plus,
  Trash2,
  MoveUp,
  MoveDown,
  Edit
} from 'lucide-react';
import { generateId } from '@/lib/utils';

interface ExperiencesProps {
  data: ExperienceItem[];
  onChange: (data: ExperienceItem[]) => void;
}

export function Experiences({ data, onChange }: ExperiencesProps) {
  const [activeId, setActiveId] = useState<string | null>(null);
  const [newAchievement, setNewAchievement] = useState<string>('');

  const handleAddExperience = () => {
    const newItem: ExperienceItem = {
      id: generateId(),
      role: '',
      company: '',
      startDate: '',
      endDate: '',
      achievements: []
    };
    onChange([...data, newItem]);
    setActiveId(newItem.id);
  };

  const handleRemoveExperience = (id: string) => {
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

  const handleUpdateExperience = (id: string, field: keyof ExperienceItem, value: any) => {
    onChange(
      data.map(item => 
        item.id === id 
          ? { ...item, [field]: value } 
          : item
      )
    );
  };

  const handleAddAchievement = (id: string) => {
    if (!newAchievement.trim()) return;
    
    onChange(
      data.map(item => 
        item.id === id 
          ? { ...item, achievements: [...item.achievements, newAchievement.trim()] } 
          : item
      )
    );
    setNewAchievement('');
  };

  const handleRemoveAchievement = (experienceId: string, index: number) => {
    onChange(
      data.map(item => 
        item.id === experienceId 
          ? { 
              ...item, 
              achievements: item.achievements.filter((_, i) => i !== index) 
            } 
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
        {data.map((experience, index) => (
          <Card 
            key={experience.id}
            className={`bg-white/50 backdrop-blur-sm border shadow-sm transition-all duration-200 ${activeId === experience.id ? 'border-primary/30 ring-2 ring-primary/10' : 'border-gray-100 hover:border-gray-200'}`}
          >
            <CardContent className="pt-4">
              <div className="flex justify-between items-center mb-4">
                <div className="font-medium">
                  {experience.role || 'New Experience'} 
                  {experience.company && ` at ${experience.company}`}
                </div>
                <div className="flex space-x-1">
                  <Button 
                    variant="ghost" 
                    size="icon" 
                    className="h-8 w-8 text-muted-foreground hover:text-foreground"
                    onClick={() => setActiveId(activeId === experience.id ? null : experience.id)}
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
                    onClick={() => handleRemoveExperience(experience.id)}
                  >
                    <Trash2 className="h-4 w-4" />
                  </Button>
                </div>
              </div>

              {activeId === experience.id && (
                <div className="space-y-4">
                  <div className="space-y-2">
                    <div className="flex items-center">
                      <Briefcase className="w-4 h-4 mr-2 text-muted-foreground" />
                      <Label htmlFor={`role-${experience.id}`} className="text-sm font-medium">Role</Label>
                    </div>
                    <Input
                      id={`role-${experience.id}`}
                      value={experience.role}
                      onChange={(e) => handleUpdateExperience(experience.id, 'role', e.target.value)}
                      placeholder="Senior Frontend Developer"
                      className="transition-all duration-200 focus:ring-2 focus:ring-primary/10"
                    />
                  </div>

                  <div className="space-y-2">
                    <div className="flex items-center">
                      <Building className="w-4 h-4 mr-2 text-muted-foreground" />
                      <Label htmlFor={`company-${experience.id}`} className="text-sm font-medium">Company Name</Label>
                    </div>
                    <Input
                      id={`company-${experience.id}`}
                      value={experience.company}
                      onChange={(e) => handleUpdateExperience(experience.id, 'company', e.target.value)}
                      placeholder="Riff"
                      className="transition-all duration-200 focus:ring-2 focus:ring-primary/10"
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <div className="flex items-center">
                        <Calendar className="w-4 h-4 mr-2 text-muted-foreground" />
                        <Label htmlFor={`startDate-${experience.id}`} className="text-sm font-medium">Start Date</Label>
                      </div>
                      <Input
                        id={`startDate-${experience.id}`}
                        type="month"
                        value={experience.startDate}
                        onChange={(e) => handleUpdateExperience(experience.id, 'startDate', e.target.value)}
                        className="transition-all duration-200 focus:ring-2 focus:ring-primary/10"
                      />
                    </div>

                    <div className="space-y-2">
                      <div className="flex items-center">
                        <Calendar className="w-4 h-4 mr-2 text-muted-foreground" />
                        <Label htmlFor={`endDate-${experience.id}`} className="text-sm font-medium">End Date</Label>
                      </div>
                      <Input
                        id={`endDate-${experience.id}`}
                        type="month"
                        value={experience.endDate}
                        onChange={(e) => handleUpdateExperience(experience.id, 'endDate', e.target.value)}
                        disabled={experience.current}
                        className="transition-all duration-200 focus:ring-2 focus:ring-primary/10"
                      />
                    </div>
                  </div>

                  <div className="flex items-center space-x-2">
                    <Checkbox 
                      id={`current-${experience.id}`}
                      checked={experience.current || false}
                      onCheckedChange={(checked) => handleCurrentChange(experience.id, checked as boolean)}
                    />
                    <Label htmlFor={`current-${experience.id}`} className="text-sm font-medium">
                      I currently work here
                    </Label>
                  </div>

                  <div className="space-y-2">
                    <div className="flex items-center">
                      <ListChecks className="w-4 h-4 mr-2 text-muted-foreground" />
                      <Label className="text-sm font-medium">Achievements/Tasks</Label>
                    </div>
                    
                    <ul className="space-y-2 mt-2">
                      {experience.achievements.map((achievement, i) => (
                        <li key={i} className="flex items-start group">
                          <div className="mr-2 mt-1">•</div>
                          <div className="flex-1">{achievement}</div>
                          <Button
                            variant="ghost"
                            size="icon"
                            className="h-6 w-6 opacity-0 group-hover:opacity-100 transition-opacity text-destructive/70 hover:text-destructive"
                            onClick={() => handleRemoveAchievement(experience.id, i)}
                          >
                            <Trash2 className="h-3 w-3" />
                          </Button>
                        </li>
                      ))}
                    </ul>

                    <div className="flex items-end space-x-2 mt-4">
                      <div className="flex-1">
                        <Textarea
                          value={newAchievement}
                          onChange={(e) => setNewAchievement(e.target.value)}
                          placeholder="Add achievement or responsibility..."
                          className="resize-none transition-all duration-200 focus:ring-2 focus:ring-primary/10"
                        />
                      </div>
                      <Button
                        size="sm"
                        onClick={() => handleAddAchievement(experience.id)}
                        disabled={!newAchievement.trim()}
                        className="flex items-center"
                      >
                        <Plus className="mr-1 h-4 w-4" /> Add
                      </Button>
                    </div>
                  </div>
                </div>
              )}
            </CardContent>
          </Card>
        ))}
      </div>

      <Button 
        variant="outline" 
        onClick={handleAddExperience}
        className="w-full flex items-center justify-center"
      >
        <Plus className="mr-2 h-4 w-4" /> Add Experience
      </Button>
    </div>
  );
}
