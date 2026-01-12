export type VentureType =
  | "food-festivals"
  | "cafe-restaurant"
  | "hotel"
  | "creative-hub"
  | "consulting";

export interface Venture {
  id: string;
  slug: string;
  type: VentureType;
  title: string;
  tagline: string;
  description: string;
  heroImage: string;
  approach: string[];
  services?: string[];
  projectIds: string[]; // Project IDs
  status: "active" | "planned" | "completed";
  icon: string;
}
