import { Injectable } from '@angular/core';
import * as firebase from 'firebase/app';
import {
  AngularFirestore,
  AngularFirestoreDocument,
  AngularFirestoreCollection
} from 'angularfire2/firestore';
import { from as fromPromise, Observable } from 'rxjs';
import { take, map } from 'rxjs/operators';

type CollectionPredicate<T> = string | AngularFirestoreCollection<T>;
type DocPredicate<T> = string | AngularFirestoreDocument<T>;

@Injectable({providedIn: 'root'})
export class FirestoreService {

  constructor(private angularFirestore: AngularFirestore) {
  }

  col<T>(ref: CollectionPredicate<T>, queryFn?: any): AngularFirestoreCollection<T> {
    return typeof ref === 'string' ? this.angularFirestore.collection<T>(ref, queryFn) : ref;
  }

  doc<T>(ref: DocPredicate<T>): AngularFirestoreDocument<T> {
      return typeof ref === 'string' ? this.angularFirestore.doc<T>(ref) : ref;
  }

  get id(): any {
    return this.angularFirestore.createId();
  }

  get timestamp(): any {
    return firebase.firestore.FieldValue.serverTimestamp();
  }

  get<T>(ref: DocPredicate<T>): Observable<T> {
    const getPromise = this.doc(ref).ref.get().then(doc => doc.data() as T);
    return fromPromise(getPromise);
  }

  list<T>(ref: CollectionPredicate<T>, queryFn: any): Observable<T[]> {
    return this.col(ref, queryFn).valueChanges();
  }

  private updateDocument<T>(ref: DocPredicate<T>, data: any): Promise<null> {
    data.updatedAt = this.timestamp;

    const batch = this.angularFirestore.firestore.batch();
    batch.update(this.doc(ref).ref, data);

    return batch.commit().then(() => null);
  }

  update<T>(ref: DocPredicate<T>, data: any): Observable<null> {
    const updatePromise = this.updateDocument(ref, data)
      .catch(err => {
        console.log('update request for ' + this.doc(ref).ref.id + ' raised an error');
        throw err;
      });
    return fromPromise(updatePromise);
  }

  private setDocument<T>(ref: DocPredicate<T>, data: any): Promise<null> {
    if (!data.id) {
      data.id = this.id;
    }

    const timestamp = this.timestamp;
    data.updatedAt = timestamp;
    data.createdAt = timestamp;

    const batch = this.angularFirestore.firestore.batch();
    batch.set(this.doc(ref).ref, data);

    return batch.commit().then(() => null);
  }

  set<T>(ref: DocPredicate<T>, data: any): Observable<null> {
    const setPromise = this.setDocument(ref, data)
      .catch(err => {
        console.log('set request for ' + this.doc(ref).ref.id + ' raised an error');
        throw err;
      });
    return fromPromise(setPromise);
  }

  add<T>(ref: CollectionPredicate<T>, data: any): Observable<null> {
    if (!data.id) {
      data.id = this.id;
    }

    const docReference = `${this.col(ref).ref.id}/${data.id}`;
    const addPromise = this.doesDocumentExist(docReference).then(doesExist => {
      if (doesExist) {
        console.log(`document ${docReference} already exists. Not creating a new one`);
      } else {
        return this.setDocument(docReference, data);
      }
    });
    return fromPromise(addPromise);
  }

  upsert<T>(ref: DocPredicate<T>, data: any): Observable<null> {
    const upsertPromise = this.doesDocumentExist(ref).then(
      doesExist => doesExist ? this.updateDocument(ref, data) : this.setDocument(ref, data)
    );
    return fromPromise(upsertPromise);
  }

  remove<T>(ref: DocPredicate<T>, data: any): Observable<null> {
    data.deleted = this.timestamp;
    return this.update(ref, data);
  }

  atomicSet<T>(requests: AtomicRequestMessage | AtomicRequestMessage[]): Observable<null> {
    const timestamp = this.timestamp;
    const batch = this.angularFirestore.firestore.batch();

    if (!(requests instanceof Array)) {
      requests = [requests];
    }

    for (const request of requests) {
      const collectionReference = this.col(request.collectionReference).ref;
      for (const d of request.data) {
        d.createdAt = timestamp;
        d.updatedAt = timestamp;

        if (!d.id) {
          d.id = this.id;
        }

        batch.set(collectionReference.doc(d.id), d);
      }
    }

    return fromPromise(batch.commit()
      .then(() => null)
      .catch(err => {
        console.log(`batch update request raised an error`);
        throw err;
      }));
  }

  atomicUpdate<T>(requests: AtomicRequestMessage | AtomicRequestMessage[]): Observable<null> {
    const timestamp = this.timestamp;
    const batch = this.angularFirestore.firestore.batch();

    if (!(requests instanceof Array)) {
      requests = [requests];
    }

    for (const request of requests) {
      const collectionReference = this.col(request.collectionReference).ref;
      for (const d of request.data) {
        d.updatedAt = timestamp;

        batch.update(collectionReference.doc(d.id), d);
      }
    }

    const batchPromise = batch.commit()
      .then(() => null)
      .catch(err => {
      console.log(`batch update request raised an error`);
      throw err;
    });

    return fromPromise(batchPromise);
  }

  private doesDocumentExist<T>(ref: DocPredicate<T>): Promise<boolean> {
    return this.doc(ref).snapshotChanges().pipe(
      take(1),
      map(snapshot => snapshot.payload.exists)
    ).toPromise();
  }
}

export interface AtomicRequestMessage {
  collectionReference: string;
  data: any[];
}
