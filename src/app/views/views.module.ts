import { AuthService } from "./../core/auth.service";
import { MatCardModule } from "@angular/material/card";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { AppRoutingModule } from "../app-routing.module";
import { LoginComponent } from "./login/login.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { RegisterComponent } from "./register/register/register.component";
import { ShopsComponent } from "./shops/shops.component";
import { ProductsComponent } from "./products/products.component";
import {
  MatIconModule,
  MatFormFieldModule,
  MatTableModule,
  MatInputModule,
} from "@angular/material";

@NgModule({
  imports: [
    CommonModule,
    AppRoutingModule,
    MatCardModule,
    FormsModule,
    ReactiveFormsModule,
    MatIconModule,
    MatFormFieldModule,
    MatTableModule,
    MatInputModule,
  ],
  declarations: [
    LoginComponent,
    ProductsComponent,
    RegisterComponent,
    ShopsComponent,
  ],
  exports: [
    LoginComponent,
    MatCardModule,
    RegisterComponent,
    ProductsComponent,
  ],
  providers: [AuthService],
})
export class ViewsModule {}
