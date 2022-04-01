
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

import { UserService } from './../../../core/services/users/user.service';
import { Component, OnInit } from '@angular/core';
import { EditUserComponent } from './editUser/editUser.component';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
  usersData:any = [] ;
  constructor(private userService:UserService,private modalService: NgbModal ) { }

  ngOnInit() {
    this.getUser();
  }


  getUser(){
    this.userService.getUsers().subscribe((res)=>{
      this.usersData = res.data;
      console.log(this.usersData );

    })
  }



  openEdit(ids:any) {
    const resultado =  this.usersData.find((user:any) => user.id === ids);
    const modalRef = this.modalService.open(EditUserComponent);
    modalRef.componentInstance.userData = resultado;
  }

  editToUser(ids:any){
    this.openEdit(ids);
  }

  deleteToUser(ids:any){
    const resultado =  this.usersData.find((user:any) => user.id === ids);
    let objParams= {
      name:resultado.name,
      email:resultado.email,
      password:resultado.password,
      username:resultado.username,
      status:resultado.status,
      roll:resultado.roll,
    }
    Swal.fire({
      title: `Seguro que deseas eliminar el usuario ${resultado.email}?`,
      showCancelButton: true,
      confirmButtonText: 'Eliminar',
    }).then((result:any) => {
      if (result.isConfirmed) {
        Swal.fire('Eliminado!', '', 'success')
        this.userService.deleteUsers(resultado.id,objParams).subscribe((res)=>{
          this.getUser();

        })
      } else if (result.isDenied) {
        Swal.fire('El Usuario no se ha eliminado', '', 'info')
      }
    })
  }

}
