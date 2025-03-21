
import { Button } from '@/components/ui/button';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Label } from '@/components/ui/label';
import { Card, CardContent } from '@/components/ui/card';
import { ThemeType } from '@/lib/types';
import { themes } from '@/lib/themes';
import { cn } from '@/lib/utils';
import { CheckIcon } from 'lucide-react';

interface ThemeSelectorProps {
  selectedTheme: ThemeType;
  onChange: (theme: ThemeType) => void;
}

export function ThemeSelector({ selectedTheme, onChange }: ThemeSelectorProps) {
  return (
    <Card className="bg-white/50 backdrop-blur-sm border border-gray-100 shadow-sm">
      <CardContent className="pt-6">
        <RadioGroup 
          defaultValue={selectedTheme} 
          value={selectedTheme}
          onValueChange={(value) => onChange(value as ThemeType)}
          className="grid grid-cols-2 gap-4"
        >
          {(Object.keys(themes) as ThemeType[]).map((themeKey) => {
            const theme = themes[themeKey];
            return (
              <div key={themeKey} className="relative animate-fade-in">
                <RadioGroupItem
                  value={themeKey}
                  id={`theme-${themeKey}`}
                  className="peer sr-only"
                />
                <Label
                  htmlFor={`theme-${themeKey}`}
                  className={cn(
                    "flex flex-col items-center justify-between rounded-md border-2 border-muted p-1 hover:bg-accent hover:text-accent-foreground",
                    "peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary",
                    "transition-all duration-200 cursor-pointer min-h-[130px]",
                  )}
                >
                  {theme.preview ? (
                    <div className="w-full h-20 overflow-hidden rounded-sm mb-2">
                      <img 
                        src={theme.preview} 
                        alt={theme.name} 
                        className="w-full h-full object-cover"
                      />
                    </div>
                  ) : (
                    <div 
                      className={cn(
                        "w-full h-20 rounded-sm mb-2",
                        `bg-themes-${themeKey} bg-opacity-20`
                      )} 
                    />
                  )}
                  <span className="text-sm font-medium mt-auto">{theme.name}</span>
                  {selectedTheme === themeKey && (
                    <CheckIcon className="absolute top-2 right-2 h-4 w-4 text-primary bg-white rounded-full p-0.5" />
                  )}
                </Label>
              </div>
            );
          })}
        </RadioGroup>
      </CardContent>
    </Card>
  );
}
