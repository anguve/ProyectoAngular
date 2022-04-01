import { RollService } from './../../../../core/services/roll/roll.service';
import { UserService } from './../../../../core/services/users/user.service';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-editRoll',
  templateUrl: './editRoll.component.html',
  styleUrls: ['./editRoll.component.css']
})
export class EditRollComponent implements OnInit {

  @Input() rollData: any;
  rollForm!: FormGroup;
  constructor(public activeModal: NgbActiveModal,private rollService : RollService) {}


  ngOnInit() {

   this.inicialForm();

  }

  inicialForm(){
    this.rollForm = new FormGroup({
      name:  new FormControl(this.rollData.name,Validators.required),
      permission: new FormControl('',Validators.required),

    });
  }


  putRolls(){
    let objParams= {
      name:this.rollForm.get('name')?.value,
      permission:[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19],
      // permission:this.rollForm.get('permission')?.value,
    }

    this.rollService.putRoll(this.rollData.id,objParams).subscribe((res:any)=>{
      console.log(res);

    })
  }
}
