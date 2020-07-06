import { AngularFirestore } from "@angular/fire/firestore";
import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class DataService {
  constructor(public firestore: AngularFirestore) {}
  getListData() {
    console.log("Llamamos a firestore");


    return this.firestore

      .collection("shoppinglist")//.doc("dk594gK0wRKlqH8tAiwi")
   //  .where("shared", "==", "beatlm@gmail.com")
      .snapshotChanges();
  }
}
