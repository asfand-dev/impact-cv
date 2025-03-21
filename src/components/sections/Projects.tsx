
import { useState } from 'react';
import { ProjectItem } from '@/lib/types';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { 
  FolderKanban, 
  Building,
  ListChecks,
  Plus,
  Trash2,
  MoveUp,
  MoveDown,
  Edit
} from 'lucide-react';
import { generateId } from '@/lib/utils';

interface ProjectsProps {
  data: ProjectItem[];
  onChange: (data: ProjectItem[]) => void;
}

export function Projects({ data, onChange }: ProjectsProps) {
  const [activeId, setActiveId] = useState<string | null>(null);
  const [newDetail, setNewDetail] = useState<string>('');

  const handleAddProject = () => {
    const newItem: ProjectItem = {
      id: generateId(),
      name: '',
      company: '',
      details: []
    };
    onChange([...data, newItem]);
    setActiveId(newItem.id);
  };

  const handleRemoveProject = (id: string) => {
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

  const handleUpdateProject = (id: string, field: keyof ProjectItem, value: any) => {
    onChange(
      data.map(item => 
        item.id === id 
          ? { ...item, [field]: value } 
          : item
      )
    );
  };

  const handleAddDetail = (id: string) => {
    if (!newDetail.trim()) return;
    
    onChange(
      data.map(item => 
        item.id === id 
          ? { ...item, details: [...item.details, newDetail.trim()] } 
          : item
      )
    );
    setNewDetail('');
  };

  const handleRemoveDetail = (projectId: string, index: number) => {
    onChange(
      data.map(item => 
        item.id === projectId 
          ? { 
              ...item, 
              details: item.details.filter((_, i) => i !== index) 
            } 
          : item
      )
    );
  };

  return (
    <div className="space-y-6">
      <div className="space-y-4">
        {data.map((project, index) => (
          <Card 
            key={project.id}
            className={`bg-white/50 backdrop-blur-sm border shadow-sm transition-all duration-200 ${activeId === project.id ? 'border-primary/30 ring-2 ring-primary/10' : 'border-gray-100 hover:border-gray-200'}`}
          >
            <CardContent className="pt-4">
              <div className="flex justify-between items-center mb-4">
                <div className="font-medium">
                  {project.name || 'New Project'} 
                  {project.company && ` for ${project.company}`}
                </div>
                <div className="flex space-x-1">
                  <Button 
                    variant="ghost" 
                    size="icon" 
                    className="h-8 w-8 text-muted-foreground hover:text-foreground"
                    onClick={() => setActiveId(activeId === project.id ? null : project.id)}
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
                    onClick={() => handleRemoveProject(project.id)}
                  >
                    <Trash2 className="h-4 w-4" />
                  </Button>
                </div>
              </div>

              {activeId === project.id && (
                <div className="space-y-4">
                  <div className="space-y-2">
                    <div className="flex items-center">
                      <FolderKanban className="w-4 h-4 mr-2 text-muted-foreground" />
                      <Label htmlFor={`name-${project.id}`} className="text-sm font-medium">Project Name</Label>
                    </div>
                    <Input
                      id={`name-${project.id}`}
                      value={project.name}
                      onChange={(e) => handleUpdateProject(project.id, 'name', e.target.value)}
                      placeholder="Automation Dashboard"
                      className="transition-all duration-200 focus:ring-2 focus:ring-primary/10"
                    />
                  </div>

                  <div className="space-y-2">
                    <div className="flex items-center">
                      <Building className="w-4 h-4 mr-2 text-muted-foreground" />
                      <Label htmlFor={`company-${project.id}`} className="text-sm font-medium">Company Name</Label>
                    </div>
                    <Input
                      id={`company-${project.id}`}
                      value={project.company}
                      onChange={(e) => handleUpdateProject(project.id, 'company', e.target.value)}
                      placeholder="PepsiCo"
                      className="transition-all duration-200 focus:ring-2 focus:ring-primary/10"
                    />
                  </div>

                  <div className="space-y-2">
                    <div className="flex items-center">
                      <ListChecks className="w-4 h-4 mr-2 text-muted-foreground" />
                      <Label className="text-sm font-medium">Details</Label>
                    </div>
                    
                    <ul className="space-y-2 mt-2">
                      {project.details.map((detail, i) => (
                        <li key={i} className="flex items-start group">
                          <div className="mr-2 mt-1">•</div>
                          <div className="flex-1">{detail}</div>
                          <Button
                            variant="ghost"
                            size="icon"
                            className="h-6 w-6 opacity-0 group-hover:opacity-100 transition-opacity text-destructive/70 hover:text-destructive"
                            onClick={() => handleRemoveDetail(project.id, i)}
                          >
                            <Trash2 className="h-3 w-3" />
                          </Button>
                        </li>
                      ))}
                    </ul>

                    <div className="flex items-end space-x-2 mt-4">
                      <div className="flex-1">
                        <Textarea
                          value={newDetail}
                          onChange={(e) => setNewDetail(e.target.value)}
                          placeholder="Add project detail..."
                          className="resize-none transition-all duration-200 focus:ring-2 focus:ring-primary/10"
                        />
                      </div>
                      <Button
                        size="sm"
                        onClick={() => handleAddDetail(project.id)}
                        disabled={!newDetail.trim()}
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
        onClick={handleAddProject}
        className="w-full flex items-center justify-center"
      >
        <Plus className="mr-2 h-4 w-4" /> Add Project
      </Button>
    </div>
  );
}
