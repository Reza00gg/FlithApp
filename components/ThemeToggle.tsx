
import React from 'react';
import { useTheme } from '../contexts/ThemeContext';
import SunIcon from './icons/SunIcon';
import MoonIcon from './icons/MoonIcon';

const ThemeToggle: React.FC = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="flex items-center justify-between w-full p-4 mt-4 bg-white/40 dark:bg-white/5 backdrop-blur-lg rounded-2xl border border-black/10 dark:border-white/10"
      aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
    >
      <span className="font-semibold text-slate-800 dark:text-slate-100">Theme</span>
      <div className="relative w-14 h-8 flex items-center bg-slate-300 dark:bg-slate-700 rounded-full p-1 transition-colors duration-300">
        <div
          className={`absolute bg-white w-6 h-6 rounded-full shadow-md transform transition-transform duration-300 ${
            theme === 'dark' ? 'translate-x-6' : 'translate-x-0'
          }`}
        />
        <div className="w-full flex justify-between px-1">
            <SunIcon className="w-4 h-4 text-yellow-500" />
            <MoonIcon className="w-4 h-4 text-slate-300" />
        </div>
      </div>
    </button>
  );
};

export default ThemeToggle;
