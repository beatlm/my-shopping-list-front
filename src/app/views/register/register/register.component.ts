import { AuthService } from './../../../core/auth.service';
import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  hide = false;

  email = new FormControl('', [Validators.required, Validators.email]);
  password = new FormControl('', [ Validators.minLength(8)]);
passwordRepeat = new FormControl('',[Validators.required])
  getErrorMessage() {
    return this.email.hasError('required') ? 'Por favor introduce un email' :
        this.email.hasError('email') ? 'El email introducido es incorrecto' :
            '';
  }
  getErrorMessagePassword() {
    return this.password.hasError('minlength') ? 'La contraseña debe tener al menos 8 caracteres' :
            'otro error';
  }

  constructor(private authService:AuthService, private router:Router ){ }

  ngOnInit() {

  }
  public register(){
    console.log("email "+this.email.value);
    this.authService.register(this.email.value,this.password.value).then(res => {
      this.router.navigate(['']);
    }, err => {
      console.log('Ha ocurrido un error \n'+err);
     // this.errorMessage = err.message;
    });
  }

}
