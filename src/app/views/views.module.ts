import { MatCardModule } from '@angular/material/card';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from '../app-routing.module';
import { LoginComponent } from './login/login.component';
import { FormsModule, ReactiveFormsModule, FormControl } from '@angular/forms';


@NgModule({
  imports: [
    CommonModule, AppRoutingModule,MatCardModule,FormsModule,ReactiveFormsModule, FormControl
  ],
  declarations: [LoginComponent],
  exports: [LoginComponent,MatCardModule],
  providers:[], 
}) 


export class ReservasModule { }
