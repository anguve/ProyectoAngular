import { JwtAuthService } from 'src/app/core/services/jwtAuth/jwtAuth.service';
import { ToSell } from './../../../../core/interfaces/toSell/toSell';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { FormGroup, FormControl, Validators } from '@angular/forms';

import { ToSellService } from './../../../../core/services/toSell/toSell.service';
import { Component, OnInit, Input } from '@angular/core';
import { localStorageJwt } from 'src/app/core/localStorage/localStorage';

@Component({
  selector: 'app-modalToSell',
  templateUrl: './modalToSell.component.html',
  styleUrls: ['./modalToSell.component.scss']
})
export class ModalToSellComponent implements OnInit {
  faCartShopping = faCartShopping;
  formSell!: FormGroup;
  constructor(private toSellService: ToSellService,public activeModal: NgbActiveModal) { }
  @Input() arrProduct: any;






  ngOnInit() {
    this.inicialFrom();
    console.log(this.arrProduct.id);



  }
  closeModal(){
    this.activeModal.close();
  }

  inicialFrom(){

    this.formSell = new FormGroup({
      product_id: new FormControl('',Validators.required),
      user_id: new FormControl('',Validators.required),
      quantity: new FormControl('',Validators.required),
    })

  }

  getSell(){}

  postSell(){
    const id = Number(localStorage.getItem(localStorageJwt.LS_ID));
    let params  = {
      "product_id":this.arrProduct.id,
      "user_id":id,
      "quantity":this.formSell.get('quantity')?.value,
    }
    this.toSellService.postSell(params).subscribe(
      (res)=>{
        setTimeout(() => {
          window.location.reload();
        },1);
      },
     (error)=>{

     }

    )

  }


}
