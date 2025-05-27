export interface Room {
  id: number;
  type: 'double' | 'family';
  name: string;
  description: string;
  maxOccupancy: number;
  amenities: string[];
  images: string[];
  price: number;
}

export interface Package {
  id: number;
  name: string;
  description: string;
  features: string[];
  price: number;
}

export interface Service {
  id: number;
  name: string;
  description: string;
  image: string;
}

export interface GalleryImage {
  id: number;
  src: string;
  alt: string;
  category: string;
}

export interface NavLink {
  id: number;
  name: string;
  path: string;
}