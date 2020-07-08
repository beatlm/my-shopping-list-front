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

  listado=[];

  constructor(public dataService: DataService) {
    console.log("Constructor");
  }

  ngOnInit() {
    this.loadData();
  }
  private loadData() {
    this.dataService
      .getListData("beatlm@gmail.com")
      .subscribe(this.showRecipes.bind(this), 
      this.catchError.bind(this));

    console.log("DATASOURCE:" + this.listado);
  }
  private showRecipes(value) {
    this.listado = value;
    console.log("DATASOURCE al finalizar la subscripción:" + this.listado);
    console.log("Value recibido"+value);
    console.log("Modificamos el data source a mano");
    this.listado=[{product:"agua"}, {product:"pan"}];

  }
  private catchError(err) {
    console.log(err);
  }
}
