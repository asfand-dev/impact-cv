
import { useState } from 'react';
import { SkillItem } from '@/lib/types';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { 
  Code, 
  Tag,
  Plus,
  Trash2,
  MoveUp,
  MoveDown,
  Edit
} from 'lucide-react';
import { generateId } from '@/lib/utils';

interface SkillsProps {
  data: SkillItem[];
  onChange: (data: SkillItem[]) => void;
}

export function Skills({ data, onChange }: SkillsProps) {
  const [activeId, setActiveId] = useState<string | null>(null);

  const handleAddSkill = () => {
    const newItem: SkillItem = {
      id: generateId(),
      title: '',
      details: ''
    };
    onChange([...data, newItem]);
    setActiveId(newItem.id);
  };

  const handleRemoveSkill = (id: string) => {
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

  const handleUpdateSkill = (id: string, field: keyof SkillItem, value: string) => {
    onChange(
      data.map(item => 
        item.id === id 
          ? { ...item, [field]: value } 
          : item
      )
    );
  };

  return (
    <div className="space-y-6">
      <div className="space-y-4">
        {data.map((skill, index) => (
          <Card 
            key={skill.id}
            className={`bg-white/50 backdrop-blur-sm border shadow-sm transition-all duration-200 ${activeId === skill.id ? 'border-primary/30 ring-2 ring-primary/10' : 'border-gray-100 hover:border-gray-200'}`}
          >
            <CardContent className="pt-4">
              <div className="flex justify-between items-center mb-4">
                <div className="font-medium">
                  {skill.title || 'New Skill'}
                </div>
                <div className="flex space-x-1">
                  <Button 
                    variant="ghost" 
                    size="icon" 
                    className="h-8 w-8 text-muted-foreground hover:text-foreground"
                    onClick={() => setActiveId(activeId === skill.id ? null : skill.id)}
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
                    onClick={() => handleRemoveSkill(skill.id)}
                  >
                    <Trash2 className="h-4 w-4" />
                  </Button>
                </div>
              </div>

              {activeId === skill.id && (
                <div className="space-y-4">
                  <div className="space-y-2">
                    <div className="flex items-center">
                      <Tag className="w-4 h-4 mr-2 text-muted-foreground" />
                      <Label htmlFor={`title-${skill.id}`} className="text-sm font-medium">Title</Label>
                    </div>
                    <Input
                      id={`title-${skill.id}`}
                      value={skill.title}
                      onChange={(e) => handleUpdateSkill(skill.id, 'title', e.target.value)}
                      placeholder="Frontend Development"
                      className="transition-all duration-200 focus:ring-2 focus:ring-primary/10"
                    />
                  </div>

                  <div className="space-y-2">
                    <div className="flex items-center">
                      <Code className="w-4 h-4 mr-2 text-muted-foreground" />
                      <Label htmlFor={`details-${skill.id}`} className="text-sm font-medium">Details</Label>
                    </div>
                    <Textarea
                      id={`details-${skill.id}`}
                      value={skill.details}
                      onChange={(e) => handleUpdateSkill(skill.id, 'details', e.target.value)}
                      placeholder="Over 10 years experience with HTML5, CSS3, JavaScript (ES6+), TypeScript, React, Next.js."
                      className="min-h-[100px] resize-y transition-all duration-200 focus:ring-2 focus:ring-primary/10"
                    />
                  </div>
                </div>
              )}
            </CardContent>
          </Card>
        ))}
      </div>

      <Button 
        variant="outline" 
        onClick={handleAddSkill}
        className="w-full flex items-center justify-center"
      >
        <Plus className="mr-2 h-4 w-4" /> Add Skill
      </Button>
    </div>
  );
}
