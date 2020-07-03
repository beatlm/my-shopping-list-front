import { MatCardModule } from '@angular/material/card';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from '../app-routing.module';
import { LoginComponent } from './login/login.component';
import { FormsModule, ReactiveFormsModule, FormControl } from '@angular/forms';
import { DashboardComponent } from './dashboard/dashboard.component';


@NgModule({
  imports: [
    CommonModule, AppRoutingModule,MatCardModule,FormsModule,ReactiveFormsModule, FormControl
  ],
  declarations: [LoginComponent, DashboardComponent],
  exports: [LoginComponent,MatCardModule],
  providers:[], 
}) 


export class ReservasModule { }
