import { Observable, of } from 'rxjs';
import { AngularFirestore } from "@angular/fire/firestore";
import { Injectable } from "@angular/core";
 

@Injectable({
  providedIn: "root",
})
export class DataService {
  constructor(public firestore: AngularFirestore) {}
  getListData(userMail):Observable<any> {
    const dataSource =  [] ;
    console.log("Llamamos a firestore");

    this.firestore
      .collection("shoppinglist")
      .ref.where("shared", "==", userMail)
      .get()
      .then(
        (res) => {
          res.forEach((doc) => {
            console.log(doc.id, "=>", doc.data());
            for (let elemento of doc.data().products) {
              dataSource.push({ product: elemento });
            }
            console.log("se ha rellenado el dataSource en el service "+dataSource);
            return of(dataSource);          });
        },
        (err) => {
          console.log("Ha ocurrido un error \n" + err);
          console.log(dataSource);     
           return of(dataSource);
        }
      );
      console.log("Devolvemos observable de "+dataSource);
      return of(dataSource);

    /*      this.firestore
    .doc("dk594gK0wRKlqH8tAiwi")
    .snapshotChanges();*/
  }
}
