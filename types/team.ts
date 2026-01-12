export interface TeamMember {
  id: string;
  name: string;
  role: string;
  bio: string;
  image: string;
  expertise: string[];
  social?: {
    linkedin?: string;
    instagram?: string;
    website?: string;
  };
}
