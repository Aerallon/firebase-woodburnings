import { FirestoreService } from './firestore.service';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { WoodburningDetails } from './interfaces';
import { MatSnackBar } from '@angular/material';


@Injectable({providedIn: 'root'})
export class WoodburningStoreService {

  constructor(private firestoreService: FirestoreService,
              public snackBar: MatSnackBar) {
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

  public delete(woodburning: WoodburningDetails): void {
    this.firestoreService.delete(`woodburnings/${woodburning.id}`);
  }

  public openSnackBar(message: string, action: string): void {
    this.snackBar.open(message, action, {
      duration: 2000,
    });
  }
}
