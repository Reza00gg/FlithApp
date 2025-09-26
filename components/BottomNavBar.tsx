
import React from 'react';
import type { TabID } from '../types';
import HomeIcon from './icons/HomeIcon';
import SearchIcon from './icons/SearchIcon';
import ProfileIcon from './icons/ProfileIcon';

interface BottomNavBarProps {
  activeTab: TabID;
  onTabChange: (tabId: TabID) => void;
}

const navItems: { id: TabID; icon: React.FC<{className?: string}> }[] = [
  { id: 'home', icon: HomeIcon },
  { id: 'search', icon: SearchIcon },
  { id: 'profile', icon: ProfileIcon },
];

const BottomNavBar: React.FC<BottomNavBarProps> = ({ activeTab, onTabChange }) => {
  const activeIndex = navItems.findIndex(item => item.id === activeTab);

  return (
    <header className="fixed bottom-0 left-1/2 -translate-x-1/2 w-[calc(100%-2rem)] max-w-sm mb-4 z-50">
      <nav className="relative flex justify-around items-center h-16 bg-white/30 dark:bg-black/30 backdrop-blur-xl border border-black/10 dark:border-white/10 rounded-full shadow-lg shadow-slate-300/50 dark:shadow-black/50 overflow-hidden">
        
        <div 
          className="absolute top-0 left-0 h-full w-1/3 bg-black/10 dark:bg-white/10 border border-black/10 dark:border-white/10 rounded-full transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(${activeIndex * 100}%)` }}
        />

        {navItems.map((item) => {
          const isActive = activeTab === item.id;
          return (
            <button
              key={item.id}
              onClick={() => onTabChange(item.id)}
              aria-label={item.id}
              className="relative z-10 flex-1 flex items-center justify-center w-full h-full text-slate-600 dark:text-slate-300 hover:text-black dark:hover:text-white transition-colors duration-300 focus:outline-none group"
            >
              <item.icon className={`h-7 w-7 transition-all duration-300 ${isActive ? 'text-black dark:text-white' : 'text-slate-500 dark:text-slate-400 group-hover:text-slate-800 dark:group-hover:text-slate-200'}`} />
            </button>
          );
        })}
      </nav>
    </header>
  );
};

export default BottomNavBar;