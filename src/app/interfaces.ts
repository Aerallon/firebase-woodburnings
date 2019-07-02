import { firestore } from 'firebase';

export interface WoodburningDetails {
    id: string;
    title: string;
    size: string;
    material: string;
    dateFinished: firestore.Timestamp;
    totalTimeTakenMinutes: number;
    totalTimeTakenHours: number;
    imageUrl: string;
    sharedOnline: boolean;
    framed: boolean;
    forSale: boolean;
    sellingPrice: number;
    sold: boolean;
    etsyListing: string;
    isFeatured: boolean;
}

export interface AppUser {
  id: string;
  email: string;
  firstName: string;
  lastName: string;
  displayName: string;
  profileImageUrl?: string;
  isDeleted: boolean;
  isAdmin: boolean;
}

export interface MapLocationDetails {
  id: string;
  city: string;
  state: string;
  country: string;
}
