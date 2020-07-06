import { DataService } from "./../../core/data.service";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-dashboard",
  templateUrl: "./dashboard.component.html",
  styleUrls: ["./dashboard.component.css"],
})
export class DashboardComponent implements OnInit {
  displayedColumns: string[] = ["product"];
  //dataSource = [{ product: "Leche" }, { product: "agua" }];
  dataSource = [];

  constructor(public dataService: DataService) {
    console.log("Constructor");
  }

  ngOnInit() {
    this.loadData();
    
  }
  private loadData(){
    this.dataService.getListData("beatlm@gmail.com").then(
      (res) => {
        // res.forEach((productsList: any) => {
        /*  this.dataSource.push({
            id: productsList.payload.doc.id,
            data: productsList.payload.doc.data()
          });*/
        res.forEach((doc) => {
          console.log(doc.id, "=>", doc.data());
       
          for (let elemento of doc.data().products) {
            console.log("Elemento :"+elemento);
            this.dataSource.push({"product":elemento});
            console.log("Midatasource");
            console.log(this.dataSource);
          }
        });
      },
      (err) => {
        console.log("Ha ocurrido un error \n" + err);

        console.log(this.dataSource);
      }
    );
    console.log("DATASOURCE:"+this.dataSource);

  }

}
