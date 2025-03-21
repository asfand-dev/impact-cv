
import { useState, useRef } from 'react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Button } from '@/components/ui/button';
import { ScrollArea } from '@/components/ui/scroll-area';
import { BasicInfo } from '@/components/sections/BasicInfo';
import { Summary } from '@/components/sections/Summary';
import { Experiences } from '@/components/sections/Experiences';
import { Education } from '@/components/sections/Education';
import { Skills } from '@/components/sections/Skills';
import { Projects } from '@/components/sections/Projects';
import { ThemeSelector } from '@/components/ThemeSelector';
import { TailorCVDialog } from '@/components/TailorCVDialog';
import { ConfigurationPanel } from '@/components/ConfigurationPanel';
import { DownloadOptions } from '@/components/DownloadOptions';
import { CVData, ThemeType } from '@/lib/types';
import { downloadJSON, readJSONFile } from '@/lib/utils';
import { 
  Upload, 
  FileJson,
  FileText,
  Settings,
  Palette,
  SlidersHorizontal,
  Download
} from 'lucide-react';
import { toast } from 'sonner';

interface SidebarProps {
  data: CVData;
  onChange: (data: CVData) => void;
}

export function Sidebar({ data, onChange }: SidebarProps) {
  const [expandedSections, setExpandedSections] = useState<string[]>(['basicInfo']);
  const [importKey, setImportKey] = useState<number>(0); // Used to reset file input
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleThemeChange = (theme: ThemeType) => {
    onChange({ ...data, activeTheme: theme });
  };

  const handleTailoredCV = (tailoredData: CVData) => {
    onChange(tailoredData);
  };

  const handleExportJSON = () => {
    downloadJSON(data, 'cv-data.json');
    toast.success('CV data exported successfully');
  };

  const handleImportJSON = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    try {
      const importedData = await readJSONFile(file);
      onChange(importedData);
      toast.success('CV data imported successfully');
      
      // Reset the file input
      setImportKey(prev => prev + 1);
    } catch (error) {
      console.error('Error importing JSON:', error);
      toast.error('Failed to import CV data. Please check the file format.');
    }
  };

  const triggerImportDialog = () => {
    fileInputRef.current?.click();
  };

  return (
    <div className="w-full h-full flex flex-col bg-gray-50/70 border-r backdrop-blur-sm">
      <div className="p-4 border-b flex justify-between items-center">
        <div>
          <h2 className="text-lg font-medium">ImpactCV</h2>
          <p className="text-sm text-muted-foreground">Configure your CV content and appearance</p>
        </div>
        
        <div className="relative">
          <Button 
            variant="outline" 
            className="flex items-center gap-2"
            onClick={triggerImportDialog}
          >
            <Upload className="h-4 w-4" />
            <span>Import</span>
          </Button>
          <input
            ref={fileInputRef}
            key={importKey}
            type="file"
            accept=".json"
            onChange={handleImportJSON}
            className="hidden"
          />
        </div>
      </div>
      
      <ScrollArea className="flex-1 px-4 py-2" style={{ maxHeight: 'calc(100vh - 82px)' }}>
        <div className="space-y-6">
          <Accordion
            type="multiple"
            value={expandedSections}
            onValueChange={setExpandedSections}
            className="space-y-4"
          >
            <AccordionItem value="basicInfo" className="border rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-all">
              <AccordionTrigger className="px-4 py-3 hover:bg-gray-100/50 transition-colors">
                Basic Information
              </AccordionTrigger>
              <AccordionContent className="pt-2 px-4 pb-4">
                <BasicInfo 
                  data={data.basicInfo}
                  onChange={(newData) => onChange({ ...data, basicInfo: newData })}
                />
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="summary" className="border rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-all">
              <AccordionTrigger className="px-4 py-3 hover:bg-gray-100/50 transition-colors">
                Summary
              </AccordionTrigger>
              <AccordionContent className="pt-2 px-4 pb-4">
                <Summary 
                  data={data.summary}
                  onChange={(newData) => onChange({ ...data, summary: newData })}
                />
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="experiences" className="border rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-all">
              <AccordionTrigger className="px-4 py-3 hover:bg-gray-100/50 transition-colors">
                Experience
              </AccordionTrigger>
              <AccordionContent className="pt-2 px-4 pb-4">
                <Experiences 
                  data={data.experiences}
                  onChange={(newData) => onChange({ ...data, experiences: newData })}
                />
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="education" className="border rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-all">
              <AccordionTrigger className="px-4 py-3 hover:bg-gray-100/50 transition-colors">
                Education
              </AccordionTrigger>
              <AccordionContent className="pt-2 px-4 pb-4">
                <Education 
                  data={data.education}
                  onChange={(newData) => onChange({ ...data, education: newData })}
                />
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="skills" className="border rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-all">
              <AccordionTrigger className="px-4 py-3 hover:bg-gray-100/50 transition-colors">
                Skills
              </AccordionTrigger>
              <AccordionContent className="pt-2 px-4 pb-4">
                <Skills 
                  data={data.skills}
                  onChange={(newData) => onChange({ ...data, skills: newData })}
                />
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="projects" className="border rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-all">
              <AccordionTrigger className="px-4 py-3 hover:bg-gray-100/50 transition-colors">
                Projects
              </AccordionTrigger>
              <AccordionContent className="pt-2 px-4 pb-4">
                <Projects 
                  data={data.projects}
                  onChange={(newData) => onChange({ ...data, projects: newData })}
                />
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="theme" className="border rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-all">
              <AccordionTrigger className="px-4 py-3 hover:bg-gray-100/50 transition-colors">
                <div className="flex items-center gap-2">
                  <Palette className="h-4 w-4" />
                  <span>Theme</span>
                </div>
              </AccordionTrigger>
              <AccordionContent className="pt-2 px-4 pb-4">
                <ThemeSelector 
                  selectedTheme={data.activeTheme}
                  onChange={handleThemeChange}
                />
              </AccordionContent>
            </AccordionItem>
          </Accordion>

          <div className="space-y-4 py-4">
            <div className="space-y-3 bg-white/80 backdrop-blur-sm p-4 rounded-lg border shadow-sm">
              <DownloadOptions cvData={data} />
            </div>

            <div className="space-y-3 p-4 bg-white/80 backdrop-blur-sm rounded-lg border shadow-sm">
              <div className="space-y-2">
                <div className="flex items-center gap-2 mb-1">
                  <Settings className="h-4 w-4" />
                  <h3 className="text-sm font-medium">Configuration</h3>
                </div>
                <div className="grid grid-cols-1 gap-3">
                  <ConfigurationPanel cvData={data} onChange={onChange} />
                  <TailorCVDialog cvData={data} onTailored={handleTailoredCV} />
                </div>
              </div>
            </div>

            <div className="space-y-3 p-4 bg-white/80 backdrop-blur-sm rounded-lg border shadow-sm">
              <div className="space-y-2">
                <div className="flex items-center gap-2 mb-1">
                  <SlidersHorizontal className="h-4 w-4" />
                  <h3 className="text-sm font-medium">Export</h3>
                </div>

                <Button 
                  variant="outline" 
                  className="w-full flex items-center gap-2 justify-center"
                  onClick={handleExportJSON}
                >
                  <FileJson className="h-4 w-4" />
                  <span>Export JSON</span>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </ScrollArea>
    </div>
  );
}
