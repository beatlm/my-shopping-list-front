import { DataService } from "./../../core/data.service";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-dashboard",
  templateUrl: "./dashboard.component.html",
  styleUrls: ["./dashboard.component.css"],
})
export class DashboardComponent implements OnInit {
  displayedColumns: string[] = ["product"];

  listado=[];

  constructor(public dataService: DataService) {
    console.log("Constructor");
  }

  ngOnInit() {
    this.loadData();
  }
  private loadData() {
    this.dataService
      .getProductsListData$('beatlm@gmail.com','carrefour')
      .subscribe(this.showData.bind(this), 
      this.catchError.bind(this));

  }
  private showData(value) {
    console.log('Mostramos '+value);
    this.listado = value;

  }
  private catchError(err) {
    console.log(err);
    this.listado=[{product: "No se han podido cargar los productos :'("} ];
  }
}
