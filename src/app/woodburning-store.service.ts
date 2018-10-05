import { FirestoreService } from './firestore.service';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';

export interface WoodburningDetails {
    id: string;
    title: string;
    size: string;
    material: string;
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

@Injectable({providedIn: 'root'})
export class WoodburningStoreService {

  constructor(private firestoreService: FirestoreService) {
  }

  public list(): Observable<any[]> { // might maybe needs to be WoodburningDetails?
    return this.firestoreService.list('woodburnings', ref => {
      return ref.orderBy('title');
    });
  }

  public get(woodburningId: string): Observable<WoodburningDetails> {
    return this.firestoreService.get<WoodburningDetails>(`woodburnings/${woodburningId}`);
  }

  public add(woodburning: WoodburningDetails): Observable<null> {
    return this.firestoreService.add('woodburnings', woodburning);
  }

  public update(woodburning: WoodburningDetails): Observable<null> {
    return this.firestoreService.update(`woodburnings/${woodburning.id}`, woodburning);
  }
}


// @Injectable()
// export class WoodburningStoreService implements OnInit {
//
//     woodburnings$$: BehaviorSubject<WoodburningDetails[]> = new BehaviorSubject([]);
//     woodburning$: Observable<WoodburningDetails[]> = this.woodburnings$$.asObservable();
//
//     woodburningCollection: AngularFirestoreCollection<WoodburningDetails>;
//     woodburnings$: Observable<WoodburningDetails[]>;
//
//     forSaleWoodburningsCollection: AngularFirestoreCollection<WoodburningDetails>;
//     forSaleWoodburnings$: Observable<WoodburningDetails[]>;
//
//     specificDocExample: AngularFirestoreDocument<WoodburningDetails>;
//     specificDoc$: Observable<WoodburningDetails>;
//
//     updatedWoodburningContent = {
//         id: 'BRNhjBiolRvPS3agyx9X',
//         title: 'New Title',
//         size: "8' x 10'",
//         material: 'Russian Birch',
//         dateFinished: '2018-09-15:19:00:00:0000',
//         totalTimeTakenMinutes: 180,
//         totalTimeTakenHours: 3,
//         imageUrl: 'http://google.com/butterfly',
//         sharedOnline: true,
//         framed: true,
//         forSale: false,
//         sellingPrice: 60,
//         sold: true
//     };
//
//     constructor( private angularFirestore: AngularFirestore) {
//         //
//     }
//
//     ngOnInit(): void {
//         // grabs all woodburnings in the collection
//         this.woodburningCollection = this.angularFirestore.collection('woodburnings', ref => {
//             return ref.orderBy('title');
//         });
//         this.woodburnings$ = this.woodburningCollection.valueChanges();
//
//         // should only bring back the for sale woodburnings
//         this.forSaleWoodburningsCollection = this.angularFirestore.collection('woodburnings', ref => {
//             return ref.where('for-sale', '==', true);
//         });
//         this.forSaleWoodburnings$ = this.forSaleWoodburningsCollection.valueChanges();
//
//         // Grabs the ornate butterfly document
//         this.specificDocExample = this.angularFirestore.doc('woodburnings/BRNhjBiolRvPS3agyx9X');
//         this.specificDoc$ = this.specificDocExample.valueChanges();
//     }
//
//     // public loadWoodburnings(): Observable<WoodburningDetails[]> {
//     //     // this might not be needed.
//     // }
//
//     public createWoodburning(woodburning: WoodburningDetails): void {
//       console.log('Creating Woodburning - service');
//       console.log(JSON.stringify(woodburning));
//
//       this.woodburningCollection.add(woodburning).then(function(): void {
//             console.log('Woodburning successfully written!');
//       }).catch(function(error: string): void {
//         console.error('Error writing woodburning: ', error);
//       });
//     }
//
//     public editWoodburning(woodburning: WoodburningDetails): void {
//         console.log('Editing Woodburning - service');
//         // this updates one at a time, can I pass the entry's doc ID and just update the whole thing?
//         this.specificDocExample.update({title: this.updatedWoodburningContent.title});
//         this.specificDocExample.update({size: this.updatedWoodburningContent.size});
//         this.specificDocExample.update({material: this.updatedWoodburningContent.material});
//         this.specificDocExample.update({dateFinished: this.updatedWoodburningContent.dateFinished});
//         this.specificDocExample.update({totalTimeTakenMinutes: this.updatedWoodburningContent.totalTimeTakenMinutes});
//         this.specificDocExample.update({totalTimeTakenHours: this.updatedWoodburningContent.totalTimeTakenHours});
//         this.specificDocExample.update({imageUrl: this.updatedWoodburningContent.imageUrl});
//         this.specificDocExample.update({sharedOnline: this.updatedWoodburningContent.sharedOnline});
//         this.specificDocExample.update({framed: this.updatedWoodburningContent.framed});
//         this.specificDocExample.update({forSale: this.updatedWoodburningContent.forSale});
//         this.specificDocExample.update({sellingPrice: this.updatedWoodburningContent.sellingPrice});
//         this.specificDocExample.update({sold: this.updatedWoodburningContent.sold});
//         console.log('Finished Editting Woodburning - service');
//     }
// }
