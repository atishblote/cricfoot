import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { GlobalService } from 'src/app/shared/services/global.service';

@Component({
  selector: 'app-add-bank',
  templateUrl: './add-bank.component.html',
  styleUrls: ['./add-bank.component.css']
})
export class AddBankComponent {

  withdrawData:any
  desableBtn:boolean = true
  status:boolean = false
  constructor(private globalService: GlobalService, private router:Router){}


  submitBankData(value:any){
    console.log(value)
    if((value.bank_name == '') && (value.account == '') && (value.ifsc == '')){
      this.status = true
    }else{
      this.status = false
      const bankData = {
        bank_name: value.bank_name,
        IFSC: value.ifsc,
        account: value.account,
        is_available: "yes"
      }
      this.globalService.uploadBank(bankData).subscribe((res)=>{
        console.log(res)
        alert("Bank Added successfuly")
      this.router.navigate(['./dashboard/withdraw-account'])
      })

    }
  }
}
