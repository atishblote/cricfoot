import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PassDataService {

  message: any
  constructor() { }


  sendMessage(data:any){
    this.message = data
  }

  getMessage(){
    return this.message
  }
  
}
