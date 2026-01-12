import { VentureType } from "./ventures";

export interface Project {
  id: string;
  slug: string;
  title: string;
  subtitle?: string;
  ventureType: VentureType[];
  year: number;
  location: string;
  status: "completed" | "ongoing" | "upcoming";
  featured: boolean;
  coverImage: string;
  gallery: string[];
  description: string;
  challenge?: string;
  solution?: string;
  outcome?: string;
  tags: string[];
  createdAt: string;
}
