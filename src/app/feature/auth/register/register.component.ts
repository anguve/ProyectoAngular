import { UserRegisterService } from './../../../core/services/userRegister/userRegister.service';




import { FormGroup, Validators, FormControl } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';



@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  registerForm!: FormGroup;
  constructor(private userRegisterService:UserRegisterService, private router:Router ) { }

  ngOnInit() {
    this.inicializeFrom();
  }
  inicializeFrom(){
    this.registerForm = new FormGroup({
      name:new FormControl('',Validators.required),
      password: new FormControl('',Validators.required),
      email: new FormControl('',Validators.required),
      username: new FormControl('',Validators.required),

    });
  }
  postRegister(){
    let objParams = {
      "name":this.registerForm.get('name')?.value,
      "username":this.registerForm.get('username')?.value,
      "email":this.registerForm.get('email')?.value,
      "password":this.registerForm.get('password')?.value,
      "status": 1,

    }

    if(this.registerForm.valid){
      this.userRegisterService.postLogin(objParams).subscribe(
        (res)=>{
          Swal.fire({
            icon: 'success',
            title: 'Te registraste correctamente.',
            showConfirmButton: true,

          }).then((result) => {
            if (result.isConfirmed) {
              void this.router.navigate(['/login']);
            }
          })



        },
        (error)=>{
          Swal.fire({
            icon: 'error',
            title: 'No te puedes registrar, Verifica tus datos.',
            showConfirmButton: true,
            timer: 5500
          });
      })
    }
  }


}
