import { FirestoreService } from '../../firestore.service';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { MapLocationDetails } from '../../interfaces';
import { MatSnackBar } from '@angular/material';


@Injectable({providedIn: 'root'})
export class MapLocationService {

  constructor(private firestoreService: FirestoreService,
              public snackBar: MatSnackBar) {
  }

  public list(): Observable<MapLocationDetails[]> {
    return this.firestoreService.list('map-locations', ref => {
      return ref;
    });
  }

  public get(locationId: string): Observable<MapLocationDetails> {
    return this.firestoreService.get<MapLocationDetails>(`map-locations/${locationId}`);
  }

  public add(location: MapLocationDetails): Observable<null> {
    return this.firestoreService.add('map-locations', location);
  }

  public update(location: MapLocationDetails): Observable<null> {
    return this.firestoreService.update(`map-locations/${location.id}`, location);
  }

  public delete(location: MapLocationDetails): void {
    this.firestoreService.delete(`map-locations/${location.id}`);
  }

  public openSnackBar(message: string, action: string): void {
    this.snackBar.open(message, action, {
      duration: 2000,
    });
  }
}
