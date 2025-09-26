import React from 'react';

const SkeletonBlock: React.FC<{className?: string}> = ({ className }) => (
    <div className={`bg-slate-300/80 dark:bg-slate-700/80 rounded-md animate-pulse ${className}`}></div>
);

const ProfileViewSkeleton: React.FC = () => {
  return (
    <div className="p-4 md:p-6">
      <SkeletonBlock className="h-10 w-48 mb-6" />
      <div className="p-6 bg-white/40 dark:bg-white/5 backdrop-blur-lg rounded-2xl border border-black/10 dark:border-white/10">
        <div className="flex flex-col items-center">
          <SkeletonBlock className="w-24 h-24 rounded-full" />
        </div>

        <div className="w-full text-left mt-6 pt-6 border-t border-black/10 dark:border-white/10 space-y-6">
          <div>
            <SkeletonBlock className="h-4 w-1/4 mb-2" />
            <SkeletonBlock className="h-7 w-3/4" />
          </div>
          <div>
            <SkeletonBlock className="h-4 w-1/3 mb-2" />
            <SkeletonBlock className="h-7 w-full" />
          </div>
        </div>

        <div className="w-full flex justify-center mt-6">
            <SkeletonBlock className="h-10 w-32 rounded-lg" />
        </div>
      </div>
      <SkeletonBlock className="h-20 w-full mt-4 rounded-2xl" />
    </div>
  );
};

export default ProfileViewSkeleton;