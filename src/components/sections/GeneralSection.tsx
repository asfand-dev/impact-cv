
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

interface GeneralProps {
  data: SkillItem[];
  onChange: (data: SkillItem[]) => void;
}

export function GeneralSection({ data, onChange }: GeneralProps) {
  const [activeId, setActiveId] = useState<string | null>(null);

  const handleAddItem = () => {
    const newItem: SkillItem = {
      id: generateId(),
      title: '',
      details: ''
    };
    onChange([...data, newItem]);
    setActiveId(newItem.id);
  };

  const handleRemoveItem = (id: string) => {
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

  const handleUpdateItem = (id: string, field: keyof SkillItem, value: string) => {
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
        {data.map((item, index) => (
          <Card 
            key={item.id}
            className={`bg-white/50 backdrop-blur-sm border shadow-sm transition-all duration-200 ${activeId === item.id ? 'border-primary/30 ring-2 ring-primary/10' : 'border-gray-100 hover:border-gray-200'}`}
          >
            <CardContent className="pt-4">
              <div className="flex justify-between items-center mb-4">
                <div className="font-medium">
                  {item.title || 'New Item'}
                </div>
                <div className="flex space-x-1">
                  <Button 
                    variant="ghost" 
                    size="icon" 
                    className="h-8 w-8 text-muted-foreground hover:text-foreground"
                    onClick={() => setActiveId(activeId === item.id ? null : item.id)}
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
                    onClick={() => handleRemoveItem(item.id)}
                  >
                    <Trash2 className="h-4 w-4" />
                  </Button>
                </div>
              </div>

              {activeId === item.id && (
                <div className="space-y-4">
                  <div className="space-y-2">
                    <div className="flex items-center">
                      <Tag className="w-4 h-4 mr-2 text-muted-foreground" />
                      <Label htmlFor={`title-${item.id}`} className="text-sm font-medium">Title</Label>
                    </div>
                    <Input
                      id={`title-${item.id}`}
                      value={item.title}
                      onChange={(e) => handleUpdateItem(item.id, 'title', e.target.value)}
                      placeholder="English Language"
                      className="transition-all duration-200 focus:ring-2 focus:ring-primary/10"
                    />
                  </div>

                  <div className="space-y-2">
                    <div className="flex items-center">
                      <Code className="w-4 h-4 mr-2 text-muted-foreground" />
                      <Label htmlFor={`details-${item.id}`} className="text-sm font-medium">Details</Label>
                    </div>
                    <Textarea
                      id={`details-${item.id}`}
                      value={item.details}
                      onChange={(e) => handleUpdateItem(item.id, 'details', e.target.value)}
                      placeholder="Describe item details..."
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
        onClick={handleAddItem}
        className="w-full flex items-center justify-center"
      >
        <Plus className="mr-2 h-4 w-4" /> Add Item
      </Button>
    </div>
  );
}
