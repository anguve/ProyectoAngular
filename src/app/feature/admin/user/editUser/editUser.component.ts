import { FormGroup, Validators, FormControl } from '@angular/forms';
import { UserService } from './../../../../core/services/users/user.service';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-editUser',
  templateUrl: './editUser.component.html',
  styleUrls: ['./editUser.component.css']
})
export class EditUserComponent implements OnInit {

  @Input() userData: any;
  userForm!: FormGroup;
  constructor(public activeModal: NgbActiveModal, private userService:UserService) {}


  ngOnInit() {
    console.log(this.userData);
   this.inicialForm();

  }

  inicialForm(){
    this.userForm = new FormGroup({
      name:  new FormControl(this.userData.name,Validators.required),
      password: new FormControl(this.userData.password,Validators.required),
      email: new FormControl(this.userData.email,Validators.required),
      username: new FormControl(this.userData.username,Validators.required),
      status: new FormControl(this.userData.status,Validators.required),
      roll: new FormControl(this.userData.roll,Validators.required),
    });
  }


  putUsers(){
    let objParams= {
      name:this.userForm.get('name')?.value,
      email:this.userForm.get('email')?.value,
      password:this.userForm.get('password')?.value,
      username:this.userForm.get('username')?.value,
      status:this.userForm.get('status')?.value,
      roll:this.userForm.get('roll')?.value,
    }

    this.userService.putUsers(this.userData.id,objParams).subscribe((res)=>{
      console.log(res);

    })
  }

}
