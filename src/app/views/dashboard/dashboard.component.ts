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

  constructor(public dataService: DataService) {}

  ngOnInit() {
    this.dataService
      .getListData().subscribe((productsSnapshot) => {
        productsSnapshot.forEach((productsList: any) => {
          this.dataSource.push({
            id: productsList.payload.doc.id,
            data: productsList.payload.doc.data()
          });
        })
      });
      console.log(this.dataSource);
    //  .subscribe(this.isOkGet.bind(this), this.catchError.bind(this));
  }
  private isOkGet(value) {
    console.log(value);
    this.dataSource = value;
  }

  private catchError(err) {
    console.log("error " + err);
 
  }
}
