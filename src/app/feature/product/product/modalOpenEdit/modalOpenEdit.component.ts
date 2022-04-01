import { ProductService } from 'src/app/core/services/product/product.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-modalOpenEdit',
  templateUrl: './modalOpenEdit.component.html',
  styleUrls: ['./modalOpenEdit.component.css']
})
export class ModalOpenEditComponent implements OnInit {
  @Input() arrProduct: any;
  createFrom!: FormGroup;
  constructor(private productService : ProductService) { }

  ngOnInit() {
    this.inicializeFrom();
  }

  inicializeFrom(){
    this.createFrom = new FormGroup({
      name:new FormControl(this.arrProduct.name,Validators.required),
      price:new FormControl(this.arrProduct.price,Validators.required),
      stock:new FormControl(this.arrProduct.stock,Validators.required),
      reference:new FormControl(this.arrProduct.reference,Validators.required),
      status:new FormControl(this.arrProduct.status,Validators.required),
      category:new FormControl(this.arrProduct.category,Validators.required),
      description:new FormControl(this.arrProduct.description,Validators.required),
      image:new FormControl(this.arrProduct.image,Validators.required),
    });
  }
  postLogin(){


    let objParams = {
      name:this.createFrom.get('name')?.value,
      price:this.createFrom.get('price')?.value,
      stock:this.createFrom.get('stock')?.value,
      reference:this.createFrom.get('reference')?.value,
      status:this.createFrom.get('status')?.value,
      category:this.createFrom.get('category')?.value,
      description:this.createFrom.get('description')?.value,
      image:this.createFrom.get('image')?.value,
    }


    this.productService.editProduct(this.arrProduct.id, objParams).subscribe((res)=>{

      console.log( res);
        // setTimeout(() => {
        //   window.location.reload();
        // },1);
       },(error)=>{}
      );

    }
}

