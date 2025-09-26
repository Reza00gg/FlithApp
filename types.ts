
export type TabID = 'home' | 'search' | 'profile';

export interface UserProfile {
  name: string;
  email: string;
  avatar: string; // base64 string or URL
}
