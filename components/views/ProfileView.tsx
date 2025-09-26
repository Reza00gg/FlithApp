import React, { useState, useEffect } from 'react';
import type { UserProfile } from '../../types';
import ThemeToggle from '../ThemeToggle';
import ProfileEditModal from '../modals/ProfileEditModal';

const ProfileView: React.FC = () => {
  const [user, setUser] = useState<UserProfile>(() => {
    try {
      const savedUser = localStorage.getItem('userProfile');
      return savedUser
        ? JSON.parse(savedUser)
        : {
            name: 'Alex Doe',
            email: 'alex.doe@example.com',
            avatar: 'https://picsum.photos/100/100',
          };
    } catch (error) {
      console.error("Failed to parse user profile from localStorage", error);
      return {
            name: 'Alex Doe',
            email: 'alex.doe@example.com',
            avatar: 'https://picsum.photos/100/100',
          };
    }
  });

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isPreparingModal, setIsPreparingModal] = useState(false);

  useEffect(() => {
    localStorage.setItem('userProfile', JSON.stringify(user));
  }, [user]);

  const handleSave = (updatedUser: UserProfile) => {
    setUser(updatedUser);
    setIsModalOpen(false);
  };

  const handleEditClick = () => {
    if (isPreparingModal) return;
    setIsPreparingModal(true);
    setTimeout(() => {
      setIsModalOpen(true);
      setIsPreparingModal(false);
    }, 750); // Simulate data fetch/preparation
  };

  return (
    <div className="p-4 md:p-6 text-slate-900 dark:text-slate-100">
      <h1 className="text-4xl md:text-5xl font-bold tracking-tight">Profile</h1>
      <div className="mt-6 p-6 bg-white/40 dark:bg-white/5 backdrop-blur-lg rounded-2xl border border-black/10 dark:border-white/10">
        <div className="flex flex-col items-center">
          <img
            src={user.avatar}
            alt="Profile"
            className="w-24 h-24 rounded-full object-cover border-2 border-white/50 shadow-lg"
          />
        </div>

        <div className="w-full text-left mt-6 pt-6 border-t border-black/10 dark:border-white/10 space-y-4">
          {isPreparingModal ? (
            <>
              <div>
                <label className="text-sm font-medium text-slate-500 dark:text-slate-400">Full Name</label>
                <div className="h-7 bg-slate-300/80 dark:bg-slate-700/80 rounded-md animate-pulse mt-1 w-3/4"></div>
              </div>
              <div>
                <label className="text-sm font-medium text-slate-500 dark:text-slate-400">Email Address</label>
                <div className="h-7 bg-slate-300/80 dark:bg-slate-700/80 rounded-md animate-pulse mt-1 w-full"></div>
              </div>
            </>
          ) : (
            <>
              <div>
                  <label className="text-sm font-medium text-slate-500 dark:text-slate-400">Full Name</label>
                  <p className="text-lg text-slate-800 dark:text-slate-100 font-medium">{user.name}</p>
              </div>
              <div>
                  <label className="text-sm font-medium text-slate-500 dark:text-slate-400">Email Address</label>
                  <p className="text-lg text-slate-800 dark:text-slate-100 font-medium">{user.email}</p>
              </div>
            </>
          )}
        </div>

        <div className="w-full flex justify-center mt-6">
            <button
              onClick={handleEditClick}
              disabled={isPreparingModal}
              className="bg-sky-500/30 hover:bg-sky-500/50 border border-sky-400/50 text-white font-bold py-2 px-6 rounded-lg transition-all duration-300 disabled:opacity-50 disabled:cursor-wait"
            >
              Edit Profile
            </button>
        </div>
      </div>
      <ThemeToggle />
      {isModalOpen && (
        <ProfileEditModal
          user={user}
          onSave={handleSave}
          onClose={() => setIsModalOpen(false)}
        />
      )}
    </div>
  );
};

export default ProfileView;