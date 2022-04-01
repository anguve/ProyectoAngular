import { Roll } from './../../../core/interfaces/roll/roll';
import { CreateRollComponent } from './createRoll/createRoll.component';
import { EditRollComponent } from './editRoll/editRoll.component';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { RollService } from './../../../core/services/roll/roll.service';
import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-roll',
  templateUrl: './roll.component.html',
  styleUrls: ['./roll.component.scss']
})
export class RollComponent implements OnInit {
  rollData:any= [];
  constructor(private rollService:RollService,private modalService: NgbModal ) { }

  ngOnInit() {
    this.getRoll();
  }

  getRoll(){
    this.rollService.getRoll().subscribe((res)=>{
      this.rollData = res.data;

    })
  }
  openEdit(ids:any) {
    const resultado =  this.rollData.find((roll:any) => roll.id === ids);
    const modalRef = this.modalService.open(EditRollComponent);
    modalRef.componentInstance.rollData = resultado;
  }

  openCreate() {

    const modalRef = this.modalService.open(CreateRollComponent);

  }
  editRoll(ids:any){
    this.openEdit(ids);
  }
  createRoll(){
    this.openCreate();
  }
  deleteRoll(ids:any){
    const resultado =  this.rollData.find((roll:any) => roll.id === ids);
    let objParams= {
      name:resultado.name,
    }



  Swal.fire({
    title: `deseas eliminar el rol?${resultado.name}`,

    showCancelButton: true,
    confirmButtonText: 'Eliminar',

  }).then((result) => {
    /* Read more about isConfirmed, isDenied below */
    if (result.isConfirmed) {
      Swal.fire('Saved!', '', 'success');
      this.rollService.deleteRoll(resultado.id, objParams).subscribe((res)=>{
        this.getRoll();
        console.log('orradoa');


      })
    } else if (result.isDenied) {
      Swal.fire('no se he eliminado el roll', '', 'info')
    }
  })

  }


}
