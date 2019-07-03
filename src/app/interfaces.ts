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

export interface MaterialDetails {
  id: string;
  type: string;
  height: number;
  width: number;
  shape: string;
  imageUrl: string;
  bought: boolean;
  purchasePrice: number;
  purchaseLocation: string;
  quantity: number;
}

export interface BlogDetails {
  id: string;
  title: string;
  content: string;
  writer: string;
  published: boolean;
  commentsAllowed: boolean;
}

export interface BlogCommentDetails {
  id: string;
  writer: string;
  comment: string;
  edited: boolean; // If update date != created date, the comment was edited.
}
