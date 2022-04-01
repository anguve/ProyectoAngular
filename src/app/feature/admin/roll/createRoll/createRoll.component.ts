import { RollService } from './../../../../core/services/roll/roll.service';
import { UserService } from './../../../../core/services/users/user.service';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-createRoll',
  templateUrl: './createRoll.component.html',
  styleUrls: ['./createRoll.component.css']
})
export class CreateRollComponent implements OnInit {
  @Input() rollData: any;
  rollForm!: FormGroup;
  constructor(public activeModal: NgbActiveModal,private rollService : RollService) {}


  ngOnInit() {

   this.inicialForm();

  }

  inicialForm(){
    this.rollForm = new FormGroup({
      name:  new FormControl('',Validators.required),
      permission: new FormControl('',Validators.required),

    });
  }


  postRolls(){
    let objParams= {
      name:this.rollForm.get('name')?.value,
      permission:[1,2,3,4,5,6,7],
      // permission:this.rollForm.get('permission')?.value,
    }

    this.rollService.postRoll(objParams).subscribe((res:any)=>{
      console.log(res);

    })
  }
}
