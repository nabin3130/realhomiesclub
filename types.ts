
export interface SocialLink {
  id: string;
  platform: 'TikTok' | 'Instagram' | 'YouTube' | 'Telegram' | 'X' | 'Other';
  label: string;
  url: string;
  icon: string;
  color: string;
}

export interface ProfileData {
  name: string;
  handle: string;
  bio: string;
  links: SocialLink[];
}
