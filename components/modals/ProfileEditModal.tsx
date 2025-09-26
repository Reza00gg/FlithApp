import React, { useState, useRef } from 'react';
import type { UserProfile } from '../../types';
import CloseIcon from '../icons/CloseIcon';
import PencilIcon from '../icons/PencilIcon';

interface ProfileEditModalProps {
  user: UserProfile;
  onSave: (user: UserProfile) => void;
  onClose: () => void;
}

const SpinnerIcon: React.FC<{className?: string}> = ({ className }) => (
    <svg className={`animate-spin ${className}`} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
    </svg>
);


const ProfileEditModal: React.FC<ProfileEditModalProps> = ({ user, onSave, onClose }) => {
    const [formData, setFormData] = useState<UserProfile>(user);
    const [isSaving, setIsSaving] = useState(false);
    const fileInputRef = useRef<HTMLInputElement>(null);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setFormData(prev => ({ ...prev, avatar: reader.result as string }));
            };
            reader.readAsDataURL(file);
        }
    };

    const handleAvatarClick = () => {
        fileInputRef.current?.click();
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (isSaving) return;

        setIsSaving(true);
        setTimeout(() => {
            onSave(formData);
            // No need to set isSaving to false, as the component will unmount
        }, 1500); // Simulate network delay
    };

    return (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4" onClick={onClose} role="dialog" aria-modal="true" aria-labelledby="edit-profile-title">
            <div className="relative bg-slate-200/80 dark:bg-slate-800/80 backdrop-blur-lg border border-black/10 dark:border-white/10 rounded-2xl w-full max-w-md p-6 text-slate-800 dark:text-slate-100 shadow-2xl animate-in fade-in-0 zoom-in-95" onClick={e => e.stopPropagation()}>
                <button onClick={onClose} disabled={isSaving} className="absolute top-4 right-4 text-slate-500 hover:text-black dark:text-slate-400 dark:hover:text-white transition-colors" aria-label="Close">
                    <CloseIcon className="w-6 h-6" />
                </button>
                <h2 id="edit-profile-title" className="text-2xl font-bold mb-6">Edit Profile</h2>

                <form onSubmit={handleSubmit}>
                    <div className="flex justify-center mb-6">
                        <div className="relative">
                            <img src={formData.avatar} alt="Profile Avatar" className="w-28 h-28 rounded-full object-cover border-2 border-white/50" />
                            <button type="button" onClick={handleAvatarClick} disabled={isSaving} className="absolute bottom-0 right-0 bg-sky-500 text-white rounded-full p-2 hover:bg-sky-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-slate-800 focus:ring-sky-500 transition-colors" aria-label="Change profile picture">
                                <PencilIcon className="w-5 h-5"/>
                            </button>
                            <input type="file" ref={fileInputRef} onChange={handleFileChange} accept="image/*" className="hidden" aria-hidden="true" />
                        </div>
                    </div>
                    
                    <div className="space-y-8 mt-8">
                       <div className="relative">
                          <input
                            type="text"
                            name="name"
                            id="name"
                            placeholder=" "
                            value={formData.name}
                            onChange={handleChange}
                            className="peer block w-full appearance-none bg-transparent pt-3 pb-2 px-1 text-slate-800 dark:text-white border-0 border-b-2 border-slate-400/50 dark:border-white/20 focus:outline-none focus:ring-0"
                            disabled={isSaving}
                          />
                          <label
                            htmlFor="name"
                            className="absolute left-1 top-3 origin-[0] text-slate-500 dark:text-slate-400 pointer-events-none transition-all duration-300 ease-in-out
                                       peer-focus:scale-75 peer-focus:-translate-y-5 peer-focus:text-sky-600 dark:peer-focus:text-sky-400
                                       peer-[&:not(:placeholder-shown)]:scale-75 peer-[&:not(:placeholder-shown)]:-translate-y-5 peer-[&:not(:placeholder-shown)]:text-sky-600 dark:peer-[&:not(:placeholder-shown)]:text-sky-400"
                          >
                            Full Name
                          </label>
                          <span className="absolute bottom-0 left-0 block h-0.5 w-0 bg-sky-500 transition-all duration-300 peer-focus:w-full"></span>
                        </div>
                        <div className="relative">
                          <input
                            type="email"
                            name="email"
                            id="email"
                            placeholder=" "
                            value={formData.email}
                            onChange={handleChange}
                            className="peer block w-full appearance-none bg-transparent pt-3 pb-2 px-1 text-slate-800 dark:text-white border-0 border-b-2 border-slate-400/50 dark:border-white/20 focus:outline-none focus:ring-0"
                            disabled={isSaving}
                          />
                          <label
                            htmlFor="email"
                            className="absolute left-1 top-3 origin-[0] text-slate-500 dark:text-slate-400 pointer-events-none transition-all duration-300 ease-in-out
                                       peer-focus:scale-75 peer-focus:-translate-y-5 peer-focus:text-sky-600 dark:peer-focus:text-sky-400
                                       peer-[&:not(:placeholder-shown)]:scale-75 peer-[&:not(:placeholder-shown)]:-translate-y-5 peer-[&:not(:placeholder-shown)]:text-sky-600 dark:peer-[&:not(:placeholder-shown)]:text-sky-400"
                          >
                            Email Address
                          </label>
                          <span className="absolute bottom-0 left-0 block h-0.5 w-0 bg-sky-500 transition-all duration-300 peer-focus:w-full"></span>
                        </div>
                    </div>

                    <div className="flex justify-end gap-4 mt-8">
                        <button type="button" onClick={onClose} disabled={isSaving} className="px-4 py-2 rounded-lg bg-black/5 dark:bg-white/5 hover:bg-black/10 dark:hover:bg-white/10 transition-colors font-semibold disabled:opacity-50">Cancel</button>
                        <button type="submit" disabled={isSaving} className="flex items-center justify-center w-36 px-4 py-2 rounded-lg bg-sky-500 hover:bg-sky-600 text-white font-bold transition-colors disabled:bg-sky-500/70 disabled:cursor-not-allowed">
                           {isSaving ? (
                                <>
                                    <SpinnerIcon className="w-5 h-5 mr-2" />
                                    Saving...
                                </>
                           ) : (
                                "Save Changes"
                           )}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default ProfileEditModal;