import { Component , OnInit} from '@angular/core';
import { GlobalService } from 'src/app/shared/services/global.service';

@Component({
  selector: 'app-payment-history',
  templateUrl: './payment-history.component.html',
  styleUrls: ['./payment-history.component.css']
})
export class PaymentHistoryComponent implements OnInit {

  getPhistory:any
  constructor(private globalService: GlobalService){}


  ngOnInit(): void {
    this.globalService.getPaymentHistory().subscribe((res)=>{
       this.getPhistory = res
      console.log(this.getPhistory)
    })
  }
}
