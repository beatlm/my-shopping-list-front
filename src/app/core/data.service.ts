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
    const dataSource = [];
    this.firestore
      .collection("shoppinglist")
      .ref.where("shared", "array-contains", userMail)
      .where("shop", "==", shop)
      .get()
      .then(
        (res) => {
          res.forEach((doc) => {
            console.log(doc.id, "=>", doc.data());
            for (let elemento of doc.data().products) {
              dataSource.push({ product: elemento });
            }
            this.productsList$.next(dataSource);
          });
        },
        (err) => {
          console.log("Ha ocurrido un error \n" + err);
          console.log(dataSource);
          return this.productsList$;
        }
      );
    return of(this.productsList$);
  }

  //Devuelve el nombre de las tiendas para las que el usuario tiene tiendas
  getShopListData$(userMail): Observable<any> {
    const dataSource2: string[]= [];

    this.firestore
      .collection("shoppinglist")
      .ref.where("shared", "array-contains", userMail)
      .get()
      .then(
        (res) => {
          console.log("Obtenemos datos de firebase");
          console.log(res.size);

          res.forEach((doc) => {
            dataSource2.push(doc.data().shop);
          });
          this.shopsList$.next(dataSource2);
          return of(this.shopsList$);
        },
        (err) => {
          console.log("Ha ocurrido un error \n" + err);
          console.log(dataSource2);
        }
      );
      console.log("devuelve "+dataSource2.length);
    return of(this.shopsList$);
  }
}
