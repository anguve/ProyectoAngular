import { localStorageJwt } from './../../localStorage/localStorage';
import { Injectable } from '@angular/core';
import jwt_decode from "jwt-decode";

@Injectable({
  providedIn: 'root'
})
export class JwtAuthService {

  constructor() { }

  login(token:string):void{
    const decode = jwt_decode<any>(token);
    localStorage.setItem(localStorageJwt.LS_ACCES_TOKEN, token);
    localStorage.setItem(localStorageJwt.LS_ROLES, JSON.stringify(decode.role));
    localStorage.setItem(localStorageJwt.LS_ID, JSON.stringify(decode.id));
  }


  isLoggedIn():boolean{
    const lsRoll = localStorage.getItem(localStorageJwt.LS_ROLES);
    if (!lsRoll) {
      return false;
    }
    const rolArray = JSON.parse(lsRoll) as Array<string>;

    if (rolArray.length==0) {
      return false;
    }
    return true;
   }
   isLogout():boolean{
    const lsRoll = localStorage.getItem(localStorageJwt.LS_ROLES);
    if (!lsRoll) {
      return true;
    }
    const rolArray = JSON.parse(lsRoll) as Array<string>;

    if (rolArray.length==0) {
      return true;
    }
    return false;
   }

   rollAdmin():boolean{
    const lsRoll = localStorage.getItem(localStorageJwt.LS_ROLES);
    if (!lsRoll) {
      return false;
    }
    const rolArray = JSON.parse(lsRoll) as string;
    if (rolArray === 'Administrator') {
      return true;
    }
    return false;
   }
   rollVendor():boolean{
    const lsRoll = localStorage.getItem(localStorageJwt.LS_ROLES);
    if (!lsRoll) {
      return false;
    }
    const rolArray = JSON.parse(lsRoll) as string;
    if (rolArray === 'Vendor') {
      return true;
    }
    return false;
   }

   rollClient():boolean{
    const lsRoll = localStorage.getItem(localStorageJwt.LS_ROLES);
    if (!lsRoll) {
      return false;
    }
    const rolArray = JSON.parse(lsRoll) as string;
    if (rolArray === 'Client') {
      return true;
    }
    return false;
   }

}
