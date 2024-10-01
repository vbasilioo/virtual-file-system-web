'use client';

import { useTheme } from 'next-themes';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';
import { Moon, Sun } from 'lucide-react';

const LightTheme = () => {
  return <Sun className="block" size={20} />;
};

const DarkTheme = () => {
  return <Moon className="block" size={20} />;
};

export const ThemeChanger = () => {
  const { theme, setTheme } = useTheme();

  return (
    <Popover>
      <PopoverTrigger asChild>
        <button className="p-2 bg-transparent border-none focus:outline-none">
          {theme === 'light' ? <LightTheme /> : <DarkTheme />}
        </button>
      </PopoverTrigger>
      <PopoverContent className="flex flex-col gap-3 max-w-36">
        <button
          className="flex items-center gap-2 p-2 bg-transparent border-none focus:outline-none w-full"
          disabled={theme === 'light'}
          onClick={() => setTheme('light')}
        >
          <LightTheme />
          <span>Claro</span>
        </button>
        <button
          className="flex items-center gap-2 p-2 bg-transparent border-none focus:outline-none w-full"
          disabled={theme === 'dark'}
          onClick={() => setTheme('dark')}
        >
          <DarkTheme />
          <span>Escuro</span>
        </button>
      </PopoverContent>
    </Popover>
  );
};
