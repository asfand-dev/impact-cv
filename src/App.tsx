import { useState, useEffect } from 'react';
import { Sidebar } from '@/components/Sidebar';
import { Preview } from '@/components/Preview';
import { CVData } from '@/lib/types';
import { defaultCVData } from '@/lib/defaultData';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { ResizableHandle, ResizablePanel, ResizablePanelGroup } from '@/components/ui/resizable';
import { useIsMobile } from '@/hooks/use-mobile';
import { Toaster as ToasterProvider } from "@/components/ui/toaster";
import { Toaster } from 'sonner';
import { TooltipProvider } from "@/components/ui/tooltip";

function App() {
  const [cvData, setCVData] = useState<CVData>(defaultCVData);
  const [activeTab, setActiveTab] = useState<string>('edit');
  const isMobile = useIsMobile();

  // Try to load saved state from localStorage
  useEffect(() => {
    const savedData = localStorage.getItem('cv-data');
    if (savedData) {
      try {
        setCVData(JSON.parse(savedData));
      } catch (e) {
        console.error('Failed to parse saved CV data', e);
      }
    }
  }, []);

  // Save state to localStorage when it changes
  useEffect(() => {
    localStorage.setItem('cv-data', JSON.stringify(cvData));
  }, [cvData]);

  if (isMobile) {
    return (
      <TooltipProvider>
        <ToasterProvider />
        <div className="min-h-screen bg-gradient-to-br from-violet-50 to-indigo-50">
          <Toaster position="top-center" richColors />
          <Tabs defaultValue="edit" value={activeTab} onValueChange={setActiveTab} className="w-full h-full">
            <div className="p-4 border-b bg-white/90 backdrop-blur-md sticky top-0 z-10 shadow-sm">
              <h1 className="text-2xl font-bold text-center mb-4 text-transparent bg-clip-text bg-gradient-to-r from-violet-600 to-indigo-600">ImpactCV</h1>
              <TabsList className="grid grid-cols-2 w-full">
                <TabsTrigger value="edit" className="transition-all">Edit</TabsTrigger>
                <TabsTrigger value="preview" className="transition-all">Preview</TabsTrigger>
              </TabsList>
            </div>
            
            <TabsContent value="edit" className="mt-0 p-0 h-[calc(100vh-125px)] animate-fade-in">
              <Sidebar data={cvData} onChange={setCVData} />
            </TabsContent>
            
            <TabsContent value="preview" className="mt-0 p-4 h-[calc(100vh-125px)] overflow-auto animate-fade-in">
              <Preview data={cvData} />
            </TabsContent>
          </Tabs>
        </div>
      </TooltipProvider>
    );
  }

  return (
    <TooltipProvider>
      <ToasterProvider />
      <div className="min-h-screen bg-gradient-to-br from-violet-50 to-indigo-100 animate-fade-in">
        <Toaster position="top-right" richColors />
        <div className="container mx-auto py-6 px-4">
          <div className="bg-white/40 backdrop-blur-md rounded-xl border shadow-lg overflow-hidden transition-all hover:shadow-xl">
            <ResizablePanelGroup direction="horizontal" className="min-h-[800px]">
              <ResizablePanel defaultSize={30} minSize={25} maxSize={40} className="transition-all">
                <Sidebar data={cvData} onChange={setCVData} />
              </ResizablePanel>
              
              <ResizableHandle withHandle className="bg-gray-200 transition-colors hover:bg-gray-300" />
              
              <ResizablePanel defaultSize={70} className="transition-all">
                <div className="h-full bg-gray-50/80 backdrop-blur-sm flex items-center justify-center p-8 overflow-auto">
                  <Preview data={cvData} />
                </div>
              </ResizablePanel>
            </ResizablePanelGroup>
          </div>
        </div>
      </div>
    </TooltipProvider>
  );
}


export default App;
