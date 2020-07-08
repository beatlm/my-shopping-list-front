import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/core/data.service';

@Component({
  selector: 'app-shops',
  templateUrl: './shops.component.html',
  styleUrls: ['./shops.component.css']
})
export class ShopsComponent implements OnInit {
 
  public listado=[];

  constructor(public dataService: DataService) {
  }

  ngOnInit() {
    this.loadData();
  }
  private loadData() {
    this.dataService
      .getShopListData$('beatlm@gmail.com')
      .subscribe(this.showData.bind(this), 
      this.catchError.bind(this));
  }
  private showData(value) {
    console.log("MOSTRAMOS DATOS"+value);
    this.listado = value;
    this.listado=["carrefour","mercadona"];

  }
  private catchError(err) {
    console.log(err);
    this.listado=["No se han podido cargar las tiendas " ];
  }

}
