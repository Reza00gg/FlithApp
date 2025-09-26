import React, { useState, useEffect } from 'react';
import type { TabID } from './types';
import BottomNavBar from './components/BottomNavBar';
import HomeView from './components/views/HomeView';
import SearchView from './components/views/SearchView';
import ProfileView from './components/views/ProfileView';
import { ThemeProvider } from './contexts/ThemeContext';
import HomeViewSkeleton from './components/skeletons/HomeViewSkeleton';
import SearchViewSkeleton from './components/skeletons/SearchViewSkeleton';
import ProfileViewSkeleton from './components/skeletons/ProfileViewSkeleton';


const App: React.FC = () => {
  const [currentTab, setCurrentTab] = useState<TabID>('home');
  const [isAnimatingOut, setIsAnimatingOut] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const handleOnline = () => {
      setIsLoading(true);
      setTimeout(() => {
        setIsLoading(false);
      }, 2000); // Simulate data fetching delay
    };

    const handleOffline = () => {
      setIsLoading(true);
    };

    window.addEventListener('online', handleOnline);
    window.addEventListener('offline', handleOffline);

    // Initial load check
    if (navigator.onLine) {
      handleOnline();
    } else {
      handleOffline();
    }

    return () => {
      window.removeEventListener('online', handleOnline);
      window.removeEventListener('offline', handleOffline);
    };
  }, []);

  const handleTabChange = (tabId: TabID) => {
    if (tabId === currentTab || isAnimatingOut) return;

    setIsAnimatingOut(true);
    setTimeout(() => {
      setCurrentTab(tabId);
      setIsAnimatingOut(false);
    }, 200); // Duration should be slightly less than the CSS transition duration
  };

  const renderContent = () => {
    const actualViews: Record<TabID, React.ReactNode> = {
      home: <HomeView />,
      search: <SearchView />,
      profile: <ProfileView />,
    };

    const skeletonViews: Record<TabID, React.ReactNode> = {
        home: <HomeViewSkeleton />,
        search: <SearchViewSkeleton />,
        profile: <ProfileViewSkeleton />,
    };

    if (isLoading) {
        return skeletonViews[currentTab];
    }
    
    // Using a key ensures the animation re-triggers on tab change
    return <div key={currentTab} className="animate-fade-in">{actualViews[currentTab]}</div>;
  };

  return (
    <ThemeProvider>
      <div className="min-h-screen font-sans text-slate-800 dark:text-white overflow-x-hidden">
        <main
          className={`pb-28 transition-opacity duration-300 ease-in-out ${
            isAnimatingOut ? 'opacity-0' : 'opacity-100'
          }`}
        >
          {renderContent()}
        </main>
        <BottomNavBar activeTab={currentTab} onTabChange={handleTabChange} />
      </div>
    </ThemeProvider>
  );
};

export default App;