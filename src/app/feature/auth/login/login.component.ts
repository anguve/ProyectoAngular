import { Login } from './../../../core/interfaces/login/login';
import { JwtAuthService } from './../../../core/services/jwtAuth/jwtAuth.service';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import jwt_decode from "jwt-decode";
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

import { LoginService } from 'src/app/core/services/login/login.service';
import { localStorageJwt } from 'src/app/core/localStorage/localStorage';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  responsedata!: any;

  loginForm!: FormGroup;

  constructor(
    private loginService:LoginService,
    private router:Router,
    private jwtAuthService:JwtAuthService
    ) { }

  ngOnInit() {
    this.inicializeFrom();
  }

  inicializeFrom(){
    this.loginForm = new FormGroup({
      password: new FormControl('',Validators.required),
      email: new FormControl('',Validators.required),
    });
  }

  postLogin(){
    let objParams = {
      "email":this.loginForm.get('email')?.value,
      "password":this.loginForm.get('password')?.value
    }
    if (this.loginForm.valid) {
      this.loginService.postLogin(objParams).subscribe((res)=>{
        this.jwtAuthService.login(res.access_token);
        void this.router.navigate(['/user/productos']);
        setTimeout(() => {
          window.location.reload();
        },1);
       },(error)=>{}
      );
    }
  }

  log(){
    console.log( this.loginForm.value);
  }

}
