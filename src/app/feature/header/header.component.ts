import { ModalHeaderComponent } from './modalHeader/modalHeader.component';
import { Component, OnInit } from '@angular/core';
import { faAddressCard, faArrowRightToBracket, faBars, faCoffee, faMugHot } from '@fortawesome/free-solid-svg-icons';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Router } from '@angular/router'
import { JwtAuthService } from 'src/app/core/services/jwtAuth/jwtAuth.service';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  faMugHot  = faMugHot;
  faArrowRightToBracket = faArrowRightToBracket;
  faAddressCard = faAddressCard;
  faBars = faBars;

  fglDataLogin!: boolean;
  fglDataLoginAdmin!: boolean;
  constructor(
    private modalService: NgbModal,
    public router: Router,
    private jwtAuthService:JwtAuthService) {}


  ngOnInit() {
    this.dataLogin();


  }
  dataLogin(){
    this.fglDataLogin = this.jwtAuthService.isLoggedIn();
    this.fglDataLoginAdmin = this.jwtAuthService.rollAdmin();
  }

  open() {
    const modalRef = this.modalService.open(ModalHeaderComponent,{
      windowClass:"modelHeader",
      centered:true
    });
    modalRef.componentInstance.name = 'World';
  }

  logout(){
    localStorage.removeItem('acces_token');
    localStorage.removeItem('roll');

    this.router.navigateByUrl('/');
    setTimeout(() => {
      window.location.reload();
    },1);


  }

}
