import { faCartShopping, faTimes } from '@fortawesome/free-solid-svg-icons';
import { Component, Input, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-modalViewProduct',
  templateUrl: './modalViewProduct.component.html',
  styleUrls: ['./modalViewProduct.component.scss']
})
export class ModalViewProductComponent implements OnInit {
  faTimes = faTimes;
  faCartShopping = faCartShopping;
  @Input() arrProduct: any;

  constructor(public activeModal: NgbActiveModal) {}

  ngOnInit() {
    console.log(this.arrProduct, "array");

    }

  closeModal(){
    this.activeModal.close();
  }

}
