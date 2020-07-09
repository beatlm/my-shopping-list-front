import { Observable, of, BehaviorSubject } from "rxjs";
import { AngularFirestore } from "@angular/fire/firestore";
import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class DataService {
  //[x: string]: any;
  private productsList$ = new BehaviorSubject<Array<string>>([]);
  private shopsList$ = new BehaviorSubject<Array<string>>([]);

  constructor(public firestore: AngularFirestore) {}

  //Devuelve los productos para un usuario y tienda
  getProductsListData$(userMail, shop): Observable<any> {
    let dataSource = [];
    this.firestore
      .collection("shoppinglist")
      .ref.where("shared", "array-contains", userMail)
      .where("shop", "==", shop)
      .get()
      .then(
        (res) => {
          console.log("Tamaño del doc" + res.docs.length);
          res.forEach((doc) => {
            console.log(doc.id, "=>", doc.data());
            for (let elemento of doc.data().products) {
              console.log("values " + elemento);
              dataSource.push({ product: elemento });
            }
            this.productsList$.next(dataSource);
          });
        },
        (err) => {
          console.log("Ha ocurrido un error \n" + err);
          console.log(dataSource);
        }
      );
    this.productsList$.next(dataSource);
    return of(this.productsList$);
  }

  //Devuelve el nombre de las tiendas para las que el usuario tiene tiendas
  getShopListData$(userMail): Observable<any> {
    let dataSource = [];

    this.firestore
      .collection("shoppinglist")
      .ref.where("shared", "array-contains", userMail)
      .get()
      .then(
        (res) => {
          console.log("Obtenemos datos de firebase");
          console.log(res.size);

          res.forEach((doc) => {
            dataSource.push({shop: doc.data().shop});
          });
          this.shopsList$.next(dataSource);
        },
        (err) => {
          console.log("Ha ocurrido un error \n" + err);
          console.log(dataSource);
        }
      );
    console.log("devuelve " + dataSource.length);
    return of(this.shopsList$);
  }
}
