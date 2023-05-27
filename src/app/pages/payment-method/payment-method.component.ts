import { Component, OnInit } from '@angular/core';
import { PassDataService } from 'src/app/shared/pass-data.service';
import { GlobalService } from 'src/app/shared/services/global.service';

@Component({
  selector: 'app-payment-method',
  templateUrl: './payment-method.component.html',
  styleUrls: ['./payment-method.component.css']
})
export class PaymentMethodComponent implements OnInit {

  pData:any

   // step second
   qrCodeUrl:any = '/assets/img/qr.png'
   phonePayUrl:any = '/assets/img/phone_pe.png'
   step = 0;
   amount:any
   paymentType :any

   setStep(index: number) {
     this.step = index;
   }
 
   nextStep() {
     this.step++;
   }
 
   prevStep() {
     this.step--;
   }
 
  // @Input() pData:any

  constructor(private passData: PassDataService, private globalService: GlobalService){}

  ngOnInit(): void {
    let rData  = this.passData.getMessage()
    this.amount = rData.amount
    this.paymentType = rData.payment_type
    // console.log(rData)
    // console.log(rData.amount)
    // console.log(rData.payment_type)    
  }
  
  
  paymentMethodSubmit(data:any){
    let currentDate = new Date()
    // console.log(data)
    
    const uploadData = {
      amount: this.amount,
      utr: data.utr,
      payment_type: this.paymentType,
      date: currentDate,
      status: "Pending"
    }
    
    if((data.utr) && (this.amount) && (this.paymentType)){
      this.globalService.updatePaymentAccount(uploadData).subscribe((res)=>{
        console.log(uploadData)
        alert("Payment is Done")
      })
    }
  }


}
