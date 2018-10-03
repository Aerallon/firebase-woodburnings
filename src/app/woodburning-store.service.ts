import { OnInit } from '@angular/core';
import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject, of as observableOf } from 'rxjs';
import { stringify } from 'querystring';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';

export interface WoodburningDetails {
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

@Injectable()
export class WoodburningStoreService implements OnInit {

    woodburnings$$: BehaviorSubject<WoodburningDetails[]> = new BehaviorSubject([]);
    woodburning$: Observable<WoodburningDetails[]> = this.woodburnings$$.asObservable();

    woodburningCollection: AngularFirestoreCollection<WoodburningDetails>;
    woodburnings$: Observable<WoodburningDetails[]>;

    forSaleWoodburningsCollection: AngularFirestoreCollection<WoodburningDetails>;
    forSaleWoodburnings$: Observable<WoodburningDetails[]>;

    specificDocExample: AngularFirestoreDocument<WoodburningDetails>;
    specificDoc$: Observable<WoodburningDetails>;

    updatedWoodburningContent = {
        title: 'New Title',
        size: "8' x 10'",
        material: 'Russian Birch',
        dateFinished: '2018-09-15:19:00:00:0000',
        totalTimeTakenMinutes: 180,
        totalTimeTakenHours: 3,
        imageUrl: 'http://google.com/butterfly',
        sharedOnline: true,
        framed: true,
        forSale: false,
        sellingPrice: 60,
        sold: true
    };

    constructor( private angularFirestore: AngularFirestore) {
        //
    }

    ngOnInit(): void {
        // grabs all woodburnings in the collection
        this.woodburningCollection = this.angularFirestore.collection('woodburnings', ref => {
            return ref.orderBy('title');
        });
        this.woodburnings$ = this.woodburningCollection.valueChanges();

        // should only bring back the for sale woodburnings
        this.forSaleWoodburningsCollection = this.angularFirestore.collection('woodburnings', ref => {
            return ref.where('forSale', '==', true);
        });
        this.forSaleWoodburnings$ = this.forSaleWoodburningsCollection.valueChanges();

        // Grabs the ornate butterfly document
        this.specificDocExample = this.angularFirestore.doc('woodburnings/BRNhjBiolRvPS3agyx9X');
        this.specificDoc$ = this.specificDocExample.valueChanges();
    }

    // public loadWoodburnings(): Observable<WoodburningDetails[]> {
    //     // this might not be needed.
    // }

    public createWoodburning(woodburning: WoodburningDetails): void {
      console.log('Creating Woodburning - service');
      // console.log(JSON.stringify(woodburning));
      this.woodburningCollection.add(woodburning).then(function(): void {
            console.log('Woodburning successfully written!');
      }).catch(function(error: string): void {
        console.error('Error writing woodburning: ', error);
      });
    }

    public editWoodburning(woodburning: WoodburningDetails): void {
        console.log('Editing Woodburning - service');
        // this updates one at a time, can I pass the entry's doc ID and just update the whole thing?
        this.specificDocExample.update({title: this.updatedWoodburningContent.title});
        this.specificDocExample.update({size: this.updatedWoodburningContent.size});
        this.specificDocExample.update({material: this.updatedWoodburningContent.material});
        this.specificDocExample.update({dateFinished: this.updatedWoodburningContent.dateFinished});
        this.specificDocExample.update({totalTimeTakenMinutes: this.updatedWoodburningContent.totalTimeTakenMinutes});
        this.specificDocExample.update({totalTimeTakenHours: this.updatedWoodburningContent.totalTimeTakenHours});
        this.specificDocExample.update({imageUrl: this.updatedWoodburningContent.imageUrl});
        this.specificDocExample.update({sharedOnline: this.updatedWoodburningContent.sharedOnline});
        this.specificDocExample.update({framed: this.updatedWoodburningContent.framed});
        this.specificDocExample.update({forSale: this.updatedWoodburningContent.forSale});
        this.specificDocExample.update({sellingPrice: this.updatedWoodburningContent.sellingPrice});
        this.specificDocExample.update({sold: this.updatedWoodburningContent.sold});
        console.log('Finished Editting Woodburning - service');
    }
}

// const firestoreDatabase = firebase.firestore();

// afs.collection('woodburnings', ref => ref.where('name', '==', 'jeff') )
// export const editWoodburningFromDB = functions.https.onRequest((request, response) => {
//   console.log(request);
//   const ornateButterflyRef = firestoreDatabase.collection("woodburnings").doc("Ornate Butterfly");
//   // Set the "capital" field of the city 'DC'
//   return ornateButterflyRef.update({
//      isSold: true
//   })
//   .then(function() {
//      console.log("Edited Woodburning from database.");
//      response.send(`Edited Woodburning from database.`);
//   })
//   .catch(function(error) {
//      // The document probably doesn't exist.
//      console.error("Error updating woodburning: ", error);
//   });
// });

// afs.collection('woodburnings', ref => ref.where('name', '==', 'jeff') )
// export const deleteWoodburningFromDB = functions.https.onRequest((request, response) => {
//   console.log(request);
//   firestoreDatabase.collection("woodburnings").doc("Ornate Butterfly 2").delete().then(function() {
//     response.send(`Deleting Woodburning from database.`);
//     console.log("Deleted Woodburning from database.");
//   }).catch(function(error) {
//     console.error("Error removing Woodburning: ", error);
//   });
// });


// afs.collection('woodburnings', ref => ref.orderBy('dateFinished') )
// export const listWoodburningsFromDB = functions.https.onRequest((request, response) => {
//   console.log(request);
//   firestoreDatabase.collection("woodburnings").get().then((querySnapshot) => {
//   querySnapshot.forEach((doc) => {
//       console.log(`${doc.id} => ${doc.data()}`);
//     });
//   })
// });

// afs.collection('woodburnings', ref => ref.where('name', '==', 'jeff') )
// export const getWoodburningFromDB = functions.https.onRequest((request, response) => {
//   console.log(request);
//   const ornateButterflyDocumentRef = firestoreDatabase.collection('woodburnings').doc('Ornate Butterfly');
//   // Will likely need a .then and .catch on this instead of the return below;
//   response.send(`Retrieving Woodburning from database.`);
//   return ornateButterflyDocumentRef;
// });

// export const listForSaleWoodburningsFromDB = functions.https.onRequest((request, response) => {
//   console.log(request);
//   const forSaleRef = firestoreDatabase.collection("woodburnings");
//   const query = forSaleRef.where("forSale", "==", true);
//   return query;
// });

//afs.collection('woodburnings', ref => ref.orderBy('forSale') )
//afs.collection('woodburnings', ref => ref.orderBy('isSold') )
// export const listNotSoldWoodburningsFromDB = functions.https.onRequest((request, response) => {
//   console.log(request);
//   const forSaleRef = firestoreDatabase.collection("woodburnings");
//   forSaleRef.where("forSale", "==", true);
//   forSaleRef.where("isSold", "==", false);
//   const query = forSaleRef;
//   return query;
// });
