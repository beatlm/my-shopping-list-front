import { AngularFirestore } from "@angular/fire/firestore";
import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class DataService {
  constructor(public firestore: AngularFirestore) {}
  getListData(userMail) {
    console.log("Llamamos a firestore");

    return this.firestore

      .collection("shoppinglist")
      .ref
      .where("shared", "==", userMail)
      .get();

/*      this.firestore
    .doc("dk594gK0wRKlqH8tAiwi")
    .snapshotChanges();*/
  }
}
