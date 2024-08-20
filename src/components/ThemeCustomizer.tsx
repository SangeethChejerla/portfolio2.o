import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Slider } from '@/components/ui/slider';
import { Palette, RotateCcw } from 'lucide-react';
import React, { useEffect, useRef, useState } from 'react';

import { getHue, resetToDefaultHue, setHue } from '@/lib/settings-utils';

const ThemeCustomizer: React.FC = () => {
  const [hue, setHueState] = useState<number>(getHue());
  const [isOpen, setIsOpen] = useState(false);
  const customiserRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setHue(hue);
  }, [hue]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        customiserRef.current &&
        !customiserRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleHueChange = (value: number[]) => {
    setHueState(value[0]);
  };

  const handleReset = () => {
    resetToDefaultHue();
    setHueState(getHue());
  };

  return (
    <div className="relative" ref={customiserRef}>
      <Button
        onClick={() => setIsOpen(!isOpen)}
        variant="outline"
        size="icon"
        className="rounded-full"
        aria-label="Open theme customizer"
      >
        <Palette className="h-[1.2rem] w-[1.2rem]" />
      </Button>
      {isOpen && (
        <Card className="absolute right-0 mt-2 w-80">
          <CardHeader>
            <CardTitle className="text-lg font-semibold">
              Theme Customizer
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <label
                className="block text-sm font-medium mb-1"
                htmlFor="hue-slider"
              >
                Theme Color
              </label>
              <div className="flex items-center space-x-2">
                <Slider
                  id="hue-slider"
                  min={0}
                  max={360}
                  step={1}
                  value={[hue]}
                  onValueChange={handleHueChange}
                  className="w-full"
                />
                <Button
                  onClick={handleReset}
                  variant="outline"
                  size="icon"
                  className="flex-shrink-0"
                  aria-label="Reset hue"
                >
                  <RotateCcw className="h-4 w-4" />
                </Button>
              </div>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-sm font-medium">Preview:</span>
              <div
                className="w-12 h-12 rounded-full border"
                style={{ backgroundColor: `hsl(${hue}, 100%, 50%)` }}
              ></div>
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  );
};

export default ThemeCustomizer;
