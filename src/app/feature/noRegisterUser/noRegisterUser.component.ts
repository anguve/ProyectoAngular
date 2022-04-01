import { Product } from './../../core/interfaces/product/product';
import { ProductService } from './../../core/services/product/product.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-noRegisterUser',
  templateUrl: './noRegisterUser.component.html',
  styleUrls: ['./noRegisterUser.component.scss']
})
export class NoRegisterUserComponent implements OnInit {


  arrProduct: any = [];

  constructor(private productService:ProductService) { }

  ngOnInit() {
    this.getProduct()
  }

  getProduct(){
    this.productService.getProduct().subscribe(
      (res)=>{
        this.arrProduct = res.data;
        console.log(res.data);

      },
      (error)=>{}

    )
  }

}
