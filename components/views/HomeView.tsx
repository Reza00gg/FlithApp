
import React from 'react';

const HomeView: React.FC = () => {
  return (
    <div className="p-4 md:p-6 text-slate-900 dark:text-slate-100">
      <h1 className="text-4xl md:text-5xl font-bold tracking-tight">Home</h1>
      <div className="mt-6 p-6 bg-white/40 dark:bg-white/5 backdrop-blur-lg rounded-2xl border border-black/10 dark:border-white/10">
        <h2 className="text-2xl font-semibold mb-3">Welcome Back</h2>
        <p className="text-slate-600 dark:text-slate-300">
          This is your main dashboard. The interface is designed to emulate a 'Glass and Titanium' aesthetic, providing a sleek, modern, and lightweight user experience.
        </p>
        <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-white/30 dark:bg-white/5 p-4 rounded-xl border border-black/10 dark:border-white/10">
                <h3 className="font-semibold text-slate-800 dark:text-slate-100">Quick Stats</h3>
                <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">Analytics are looking great today.</p>
            </div>
            <div className="bg-white/30 dark:bg-white/5 p-4 rounded-xl border border-black/10 dark:border-white/10">
                <h3 className="font-semibold text-slate-800 dark:text-slate-100">Recent Activity</h3>
                <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">No new notifications.</p>
            </div>
        </div>
      </div>
    </div>
  );
};

export default HomeView;