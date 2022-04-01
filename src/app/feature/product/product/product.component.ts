import { ModalCreateComponent } from './modalCreate/modalCreate.component';
import { ModalOpenEditComponent } from './modalOpenEdit/modalOpenEdit.component';
import { Product } from './../../../core/interfaces/product/product';
import { JwtAuthService } from 'src/app/core/services/jwtAuth/jwtAuth.service';
import { ModalToSellComponent } from './modalToSell/modalToSell.component';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Component, OnInit } from '@angular/core';
import { faCartShopping, faEye, faTrash } from '@fortawesome/free-solid-svg-icons';
import { ProductService } from 'src/app/core/services/product/product.service';
import { ModalViewProductComponent } from './modalViewProduct/modalViewProduct.component';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
  faCartShopping = faCartShopping;
  faEye = faEye;
  faTrash = faTrash;
  arrProduct: any = [];


  fglDataLoginAdmin!: boolean;
  fglDataLoginVendor!: boolean;

  constructor(private productService:ProductService,private modalService: NgbModal, private jwtAuthService : JwtAuthService) { }

  ngOnInit() {
    this.getProduct();
    this.dataLogin();
  }
  dataLogin(){
    this.fglDataLoginAdmin = this.jwtAuthService.rollAdmin();
    this.fglDataLoginVendor = this.jwtAuthService.rollVendor();
  }

  getProduct(){
    this.productService.getProduct().subscribe(
      (res)=>{
        this.arrProduct = res.data;
      },
      (error)=>{}
    )
  }

  openView(ids:number) {
    const resultado = this.arrProduct.find((product:any) => product.id === ids);
     const modalRef = this.modalService.open(ModalViewProductComponent,{
      centered:true,
      size: 'sm',
      // backdrop: false,
      windowClass: 'openView'
    });
    modalRef.componentInstance.arrProduct = resultado;
  }


  openToSell(ids:number) {
    const resultado = this.arrProduct.find((product:any) => product.id === ids);
     const modalRef = this.modalService.open(ModalToSellComponent,{
      centered:true,
      size: 'sm',
      // backdrop: false
    });
    modalRef.componentInstance.arrProduct = resultado;
  }
  openEdit(ids:number) {
    const resultado = this.arrProduct.find((product:any) => product.id === ids);
     const modalRef = this.modalService.open(ModalOpenEditComponent,{
      centered:true,
      size: 'sm',
      // backdrop: false
    });
    modalRef.componentInstance.arrProduct = resultado;
  }
  openCrear() {

     const modalRef = this.modalService.open(ModalCreateComponent,{
      centered:true,
      // size: 'sm',
      // backdrop: false
    });

  }

  openToDelete(ids:number){
    const resultado = this.arrProduct.find((product:any) => product.id === ids);
    let params = {
      id:resultado.id,
      name:resultado.name,
      price:resultado.price,
      stock:resultado.stock,
      reference:resultado.reference,
      status:resultado.status,
      category:resultado.category,
      description:resultado.description,
      image:resultado.image,
    }



    Swal.fire({
      title: `Deseas eliminar el producto? ${resultado.name}`,
      showCancelButton: true,
      confirmButtonText: 'borrar',

    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        Swal.fire('Saved!', '', 'success');
        this.productService.deleteProduct(ids, params).subscribe(
          (res)=>{
            this.arrProduct = res.data;
            setTimeout(() => {
              window.location.reload();
            },10000);
          },
          (error)=>{}
        )
      } else if (result.isDenied) {
        Swal.fire('Changes are not saved', '', 'info')
      }
    })




  }



  }


