import React from 'react';

const SkeletonBlock: React.FC<{className?: string}> = ({ className }) => (
    <div className={`bg-slate-300/80 dark:bg-slate-700/80 rounded-md animate-pulse ${className}`}></div>
);

const SkeletonCard: React.FC = () => (
    <div className="flex flex-col bg-white/30 dark:bg-white/5 rounded-2xl border border-black/10 dark:border-white/10 overflow-hidden">
        <SkeletonBlock className="w-full h-40" />
        <div className="p-4 flex flex-col flex-grow">
            <SkeletonBlock className="h-6 w-3/4 mb-2" />
            <SkeletonBlock className="h-4 w-full mb-1" />
            <SkeletonBlock className="h-4 w-1/2 mb-4" />
            <div className="flex justify-between items-center mt-auto">
                <SkeletonBlock className="h-8 w-1/3" />
                <SkeletonBlock className="h-8 w-8 rounded-full" />
            </div>
            <SkeletonBlock className="h-10 w-full mt-4 rounded-lg" />
        </div>
    </div>
);

const SearchViewSkeleton: React.FC = () => {
  return (
    <div className="p-4 md:p-6">
      <SkeletonBlock className="h-10 w-48 mb-6" />
      <div className="p-6 bg-white/40 dark:bg-white/5 backdrop-blur-lg rounded-2xl border border-black/10 dark:border-white/10">
        <SkeletonBlock className="h-8 w-1/3 mb-4" />
        <div className="space-y-2 mb-8">
            <SkeletonBlock className="h-4 w-full" />
        </div>
        <SkeletonBlock className="h-14 w-full" />
      </div>
      <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {[...Array(3)].map((_, i) => <SkeletonCard key={i} />)}
      </div>
    </div>
  );
};

export default SearchViewSkeleton;
