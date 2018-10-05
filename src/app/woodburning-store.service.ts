import { FirestoreService } from './firestore.service';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { WoodburningDetails } from './interfaces';

@Injectable({providedIn: 'root'})
export class WoodburningStoreService {

  constructor(private firestoreService: FirestoreService) {
  }

  public list(): Observable<WoodburningDetails[]> {
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
