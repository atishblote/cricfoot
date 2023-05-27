import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AuthGuard } from '../guard/auth.guard';

@Injectable({
  providedIn: 'root'
})
export class GlobalService {
  baseUrl:any = "http://localhost:3000"
  // testUrl:string = 'http://43.204.182.233:7777/api/accounts'
  constructor(private httpClients: HttpClient , private authGuard: AuthGuard) { }


 
  getUserData(){
    let getUrl = `${this.baseUrl}/users`
    return this.httpClients.get(getUrl)
    
  }

  // login
  userLogin(ukey:string){
    sessionStorage.setItem("userkey" , ukey)
  }
  checkLoginData(){
     return sessionStorage.getItem("userkey")
  }
  logOut(){
    sessionStorage.removeItem("userkey")
  }

  // get website data
  getWebsiteList(){
    let getUrl = `${this.baseUrl}/create_id`
    return this.httpClients.get(getUrl)
  }
  // single website
  getSingleWebsite(id:any){

    let getUrl = `${this.baseUrl}/create_id_payment_details/${id}`
    console.log(getUrl)
    return this.httpClients.get(getUrl)
  }


  // get create account id data
  getAccountSingleId(id:any){
    let getUrl = `${this.baseUrl}/create_id/${id}`
    return this.httpClients.get(getUrl)
  }

  // add create id data 
  updateCreateIDData(data:any){
    let getUrl = `${this.baseUrl}/create_id_payment_details`
    return this.httpClients.post(getUrl, data)
  }
  // get createed id list
  getCreateIDData(){
    let getUrl = `${this.baseUrl}/create_id_payment_details`
    return this.httpClients.get(getUrl)
  }


  // payment method
  updatePaymentAccount(data:any){
    let getUrl= `${this.baseUrl}/payment_history`

    return this.httpClients.post(getUrl, data)
  }


  // payent history
  getPaymentHistory(){
    let getUrl = `${this.baseUrl}/payment_history`
    return this.httpClients.get(getUrl)
  }

  // bank add
  getBankDetails(){
    let getUrl = `${this.baseUrl}/add_bank`
    return this.httpClients.get(getUrl)
  }
  uploadBank(data:any){
    let getUrl = `${this.baseUrl}/add_bank`
    return this.httpClients.post(getUrl, data)
  }


  // signup
  signUpUser(data:any){
    let getUrl = `${this.baseUrl}/users`
    return this.httpClients.post(getUrl,data)
  }
}
