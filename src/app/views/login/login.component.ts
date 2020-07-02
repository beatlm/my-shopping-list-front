import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
 
  email = new FormControl('', [Validators.required, Validators.email]);
  password= new FormControl('',[Validators.required, Validators.minLength(8)]);

  getErrorMessage() {
    return this.email.hasError('required') ? 'Por favor introduce un email' :
        this.email.hasError('email') ? 'El email introducido es incorrecto' :
            '';
  }
  getErrorMessagePassword() {
    return this.password.hasError('minLength') ? 'La contraseña debe tener al menos 8 caracteres' :
            'otro error';
  }
  constructor(private router: Router) { }

  ngOnInit() {
  }
public login(){
  console.log("prueba login"+this.email.value+" "+this.password.value);
}
}
