import { ShopsComponent } from "./views/shops/shops.component";
import { RegisterComponent } from "./views/register/register/register.component";
import { LoginComponent } from "./views/login/login.component";
import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { DashboardComponent } from "./views/dashboard/dashboard.component";

const routes: Routes = [
  { path: "", component: LoginComponent },
  { path: "register", component: RegisterComponent },
  { path: "dashboard", component: DashboardComponent }, //canActivate: [AuthGuard] },
  { path: "shops", component: ShopsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
