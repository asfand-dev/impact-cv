
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { FileText, Printer } from 'lucide-react';
import { CVData } from '@/lib/types';
import { toast } from 'sonner';

interface DownloadOptionsProps {
  cvData: CVData;
}

export function DownloadOptions({ cvData }: DownloadOptionsProps) {
  const [isGenerating, setIsGenerating] = useState(false);

  const generateHtmlContent = (): string => {
    const cvDocument = document.querySelector("#cv-preview").cloneNode(true) as HTMLElement;
    cvDocument.style = "width: auto;";
    const content = cvDocument?.outerHTML;

    return `
    <!doctype html>
     <html>
       <head>
         <meta charset="UTF-8" />
         <meta name="viewport" content="width=device-width, initial-scale=1.0" />
         <script src="https://cdn.jsdelivr.net/npm/@tailwindcss/browser@4"></script>
         <style type="text/tailwindcss"></style>
       </head>
       <body style="display: flex;justify-content: center;">
        <div style="max-width: 794px;">
          ${content}
        </div>
       </body>
     </html>
     `;
  }

  const exportHtml = () => {
    try {
      setIsGenerating(true);
      const htmlContent = generateHtmlContent();
      const blob = new Blob([htmlContent], { type: 'text/html' });
      const url = URL.createObjectURL(blob);
      
      const a = document.createElement('a');
      a.href = url;
      a.download = `${cvData.basicInfo.name.replace(/\s+/g, '-')}-${cvData.basicInfo.role.replace(/\s+/g, '-')}-CV.html`;
      document.body.appendChild(a);
      a.click();
      
      setTimeout(() => {
        document.body.removeChild(a);
        URL.revokeObjectURL(url);
        setIsGenerating(false);
      }, 100);
      
      toast.success('CV exported as HTML successfully');
    } catch (error) {
      console.error('Error exporting HTML:', error);
      toast.error('Failed to export HTML');
      setIsGenerating(false);
    }
  };

  const openPrintPreview = () => {
    try {
      setIsGenerating(true);
      const printWindow = window.open('', '_blank');
      
      if (!printWindow) {
        toast.error('Please allow popups to print your CV');
        setIsGenerating(false);
        return;
      }

      printWindow.document.write(generateHtmlContent());
      printWindow.document.close();
      
      // Wait for resources to load then print
      printWindow.onload = () => {
        try {
          printWindow.focus();
          printWindow.print();
          setIsGenerating(false);
        } catch (error) {
          console.error('Error during print:', error);
          toast.error('Failed to open print dialog');
          setIsGenerating(false);
        }
      };
    } catch (error) {
      console.error('Error opening print preview:', error);
      toast.error('Failed to generate print preview');
      setIsGenerating(false);
    }
  };

  const exportPDF = async () => {
    const loadScript = (url) => new Promise((res) => {
      const script = document.createElement('script');
      script.src = url;

      script.onload = () => res(true);
      document.head.appendChild(script);
    });

    // await loadScript('https://cdnjs.cloudflare.com/ajax/libs/jspdf/2.5.1/jspdf.umd.min.js');
    await loadScript('https://cdnjs.cloudflare.com/ajax/libs/html2pdf.js/0.10.1/html2pdf.bundle.min.js');

    const element = document.getElementById('cv-preview');

      const opt = {
        margin: 0.5,
        filename: 'tailwind_page.pdf',
        html2canvas: { scale: 2, useCORS: true }, // html2canvas is optional here; we bypass it for text
        jsPDF: { unit: 'in', format: 'letter', orientation: 'portrait' },
        pagebreak: { mode: ['avoid-all', 'css', 'legacy'] }
      };

      // Generate PDF directly from HTML/CSS
      await window.html2pdf().set(opt).from(element).toPdf().get('pdf').then((pdf) => {
        pdf.save();
      });
  }

  return (
    <div className="space-y-4">
      <div className="space-y-2">
        <h3 className="text-sm font-medium flex items-center gap-2">
          <FileText className="h-4 w-4" />
          Download Options
        </h3>
        <p className="text-xs text-muted-foreground">
          Export your CV in different formats for sharing or printing
        </p>
      </div>

      <div className="grid grid-cols-2 gap-3">
        <Button
          variant="outline"
          className="flex items-center gap-2 justify-center transition-all hover:bg-slate-100"
          onClick={exportHtml}
          disabled={isGenerating}
        >
          <FileText className="h-4 w-4" />
          <span>Export HTML</span>
        </Button>

        <Button
          variant="outline"
          className="flex items-center gap-2 justify-center transition-all hover:bg-slate-100"
          onClick={openPrintPreview}
          disabled={isGenerating}
        >
          <Printer className="h-4 w-4" />
          <span>Print</span>
        </Button>

        {/* <Button
          variant="outline"
          className="flex items-center gap-2 justify-center transition-all hover:bg-slate-100"
          onClick={exportPDF}
          disabled={isGenerating}
        >
          <Printer className="h-4 w-4" />
          <span>Save PDF</span>
        </Button> */}
      </div>
    </div>
  );
}
