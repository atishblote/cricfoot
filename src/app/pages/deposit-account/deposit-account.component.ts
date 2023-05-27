import { Component, EventEmitter, Output , Input} from '@angular/core';
import { Router } from '@angular/router';
import { PassDataService } from 'src/app/shared/pass-data.service';

@Component({
  selector: 'app-deposit-account',
  templateUrl: './deposit-account.component.html',
  styleUrls: ['./deposit-account.component.css']
})
export class DepositAccountComponent {


  deposit_amount:any
  status:boolean = false

// data:any


  constructor(private router:Router, private passData: PassDataService){}

  depositAmountFunc(amount:any , paymenttype:any){
    let deposit_amount = {
      'amount': amount,
      'payment_type' : paymenttype
      
    }
    console.log(amount)
    console.log(paymenttype)

    if(amount <= 499){
      this.status = true
    }else{
      this.status = false
      this.passData.sendMessage(deposit_amount)
      this.router.navigate(['/dashboard/payment-method'])
    }
  }



}
