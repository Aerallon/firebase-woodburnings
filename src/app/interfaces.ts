// import { firestore } from 'firebase';

export interface WoodburningDetails {
    id: string;
    title: string;
    size: string;
    material: string;
    // dateFinished: firestore.Timestamp;
    dateFinished: string;
    totalTimeTakenMinutes: number;
    totalTimeTakenHours: number;
    imageUrl: string;
    sharedOnline: boolean;
    framed: boolean;
    forSale: boolean;
    sellingPrice: number;
    sold: boolean;
}
