import { Router, ActivatedRoute } from "@angular/router";
import { DataService } from "./../../core/data.service";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-dashboard",
  templateUrl: "./dashboard.component.html",
  styleUrls: ["./dashboard.component.css"],
})
export class DashboardComponent implements OnInit {
  displayedColumns: string[] = ["product"];
  shop: string = "";
  listado = [];

  constructor(
    public dataService: DataService,
    private route: ActivatedRoute,
    public router: Router
  ) {
    console.log("Constructor");
  }

  ngOnInit() {
    this.shop = this.route.snapshot.paramMap.get("shop");
    this.loadData();
  }
  private loadData() {
    console.log('llamamos al servicio con a tienda:'+this.shop)
    this.dataService
      .getProductsListData$("beatlm@gmail.com", this.shop)
      .subscribe(this.showData.bind(this), this.catchError.bind(this));
  }
  private showData(value) {
    console.log('VALUE ');
    console.log(value);
    this.listado = value;
  }
  private catchError(err) {
    console.log(err);
    this.listado = [{ product: "No se han podido cargar los productos :'(" }];
  }
  public login() {
    this.router.navigate(["/shops"]);
  }
}
