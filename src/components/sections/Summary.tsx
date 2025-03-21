
import { Summary as SummaryType } from '@/lib/types';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent } from '@/components/ui/card';
import { FileText } from 'lucide-react';

interface SummaryProps {
  data: SummaryType;
  onChange: (data: SummaryType) => void;
}

export function Summary({ data, onChange }: SummaryProps) {
  return (
    <Card className="bg-white/50 backdrop-blur-sm border border-gray-100 shadow-sm">
      <CardContent className="pt-6 space-y-4">
        <div className="space-y-2">
          <div className="flex items-center">
            <FileText className="w-4 h-4 mr-2 text-muted-foreground" />
            <Label htmlFor="summary" className="text-sm font-medium">Professional Summary</Label>
          </div>
          <Textarea
            id="summary"
            value={data.content}
            onChange={(e) => onChange({ content: e.target.value })}
            placeholder="Summarize your professional experience, skills, and career goals..."
            className="min-h-[150px] resize-y transition-all duration-200 focus:ring-2 focus:ring-primary/10"
          />
          <p className="text-xs text-muted-foreground mt-2">
            A concise summary of your professional background, key skills and career accomplishments. 
            This section helps recruiters quickly understand your value proposition.
          </p>
        </div>
      </CardContent>
    </Card>
  );
}
