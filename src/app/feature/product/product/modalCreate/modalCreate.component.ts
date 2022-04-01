
import { ProductService } from 'src/app/core/services/product/product.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { faCalendarPlus } from '@fortawesome/free-solid-svg-icons';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-modalCreate',
  templateUrl: './modalCreate.component.html',
  styleUrls: ['./modalCreate.component.css']
})
export class ModalCreateComponent implements OnInit {
  createFrom!: FormGroup;
  viewImage!:string;
  files:any= [];
  filePath!:any;




  faCalendarPlus = faCalendarPlus;
  constructor(private productService : ProductService, private sanitizer:DomSanitizer) { }

  ngOnInit() {
    this.inicializeFrom();
  }

  inicializeFrom(){
    this.createFrom = new FormGroup({
      name:new FormControl('',Validators.required),
      price:new FormControl('',Validators.required),
      stock:new FormControl('',Validators.required),
      reference:new FormControl('',Validators.required),
      status:new FormControl('',Validators.required),
      category:new FormControl('',Validators.required),
      description:new FormControl('',Validators.required),
      image:new FormControl('',Validators.required),
    });
  }
  capturarFile(event:any){
    const fileCapture = event.target.files[0];
    this.blobFile(fileCapture).then((image:any)=>{
      this.viewImage = image.base;

    });
    this.files.push(fileCapture);
  }

  blobFile = async ($event: any) => new Promise((resolve, reject) => {
    try {
      const unsafeImg = window.URL.createObjectURL($event);
      const image = this.sanitizer.bypassSecurityTrustUrl(unsafeImg);
      const reader = new FileReader();
      reader.readAsDataURL($event);
      reader.onload = () => {
        resolve({
          base: reader.result
        });
      };
      reader.onerror = error => {
        resolve({
          base: null
        });
      };

    } catch (e) {
      return null;
    }
  })

  postLogin(){
    console.log( 'se creo');

    let objParams = {
      name:this.createFrom.get('name')?.value,
      price:this.createFrom.get('price')?.value,
      stock:this.createFrom.get('stock')?.value,
      reference:this.createFrom.get('reference')?.value,
      status:this.createFrom.get('status')?.value,
      category:this.createFrom.get('category')?.value,
      description:this.createFrom.get('description')?.value,
      image:`images/${this.createFrom.get('image')?.value}`,
    }


    this.productService.postProduct(objParams).subscribe((res)=>{

      console.log( res);
        setTimeout(() => {
          window.location.reload();
        },1);
       },(error)=>{}
      );
    }







}

