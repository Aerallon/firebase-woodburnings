import { FirestoreService } from '../../firestore.service';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { MaterialDetails } from '../../interfaces';
import { MatSnackBar } from '@angular/material';


@Injectable({providedIn: 'root'})
export class MaterialService {

  constructor(private firestoreService: FirestoreService,
              public snackBar: MatSnackBar) {
  }

  public list(): Observable<MaterialDetails[]> {
    return this.firestoreService.list('materials', ref => {
      return ref;
    });
  }

  public get(materialId: string): Observable<MaterialDetails> {
    return this.firestoreService.get<MaterialDetails>(`materials/${materialId}`);
  }

  public add(material: MaterialDetails): Observable<null> {
    return this.firestoreService.add('materials', material);
  }

  public update(material: MaterialDetails): Observable<null> {
    return this.firestoreService.update(`materials/${material.id}`, material);
  }

  public delete(material: MaterialDetails): void {
    this.firestoreService.delete(`materials/${material.id}`);
  }

  public openSnackBar(message: string, action: string): void {
    this.snackBar.open(message, action, {
      duration: 2000,
    });
  }
}
