// Define the ActivityServiceDetail interface
export interface ServiceDetail {
  provider: string;
  providerLogo?: string;
  providerUrl: string;
  shortHeroDescription: string;
  detailDescription: string;
  fullDescription: string;
  video?: string;
  benefits?: string[];
  methodology?: string[];
}

// Complete interface for an activity service item
export interface ActivityServiceItem {
  id: number;
  slug: string;
  title: string;
  shortDescription: string;
  description: string;
  image: string | any; // Allowing 'any' to support require() imports
  galleryImages: string[] | any[]; // Allowing 'any[]' to support require() imports
  detail: ServiceDetail;
}

export interface ServiceStructure {
  color: string;
  title: string;
  description: string;
  imageClassname: string;
  image: string;
  route: string;
}
