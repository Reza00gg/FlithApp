import React from 'react';

const SkeletonBlock: React.FC<{className?: string}> = ({ className }) => (
    <div className={`bg-slate-300/80 dark:bg-slate-700/80 rounded-md animate-pulse ${className}`}></div>
);

const HomeViewSkeleton: React.FC = () => {
  return (
    <div className="p-4 md:p-6">
      <SkeletonBlock className="h-10 w-48 mb-6" />
      <div className="p-6 bg-white/40 dark:bg-white/5 backdrop-blur-lg rounded-2xl border border-black/10 dark:border-white/10">
        <SkeletonBlock className="h-8 w-1/2 mb-4" />
        <div className="space-y-2">
            <SkeletonBlock className="h-4 w-full" />
            <SkeletonBlock className="h-4 w-5/6" />
        </div>
        <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-white/30 dark:bg-white/5 p-4 rounded-xl border border-black/10 dark:border-white/10 space-y-2">
                <SkeletonBlock className="h-6 w-1/3" />
                <SkeletonBlock className="h-4 w-3/4" />
            </div>
            <div className="bg-white/30 dark:bg-white/5 p-4 rounded-xl border border-black/10 dark:border-white/10 space-y-2">
                <SkeletonBlock className="h-6 w-1/2" />
                <SkeletonBlock className="h-4 w-2/3" />
            </div>
        </div>
      </div>
    </div>
  );
};

export default HomeViewSkeleton;