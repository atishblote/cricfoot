import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { GlobalService } from 'src/app/shared/services/global.service';

@Component({
  selector: 'app-deposit',
  templateUrl: './deposit.component.html',
  styleUrls: ['./deposit.component.css']
})
export class DepositComponent  implements OnInit{

  withdrawData:any
  listData:any
  constructor(private globalService:GlobalService, private formBuilder: FormBuilder){}

  ngOnInit(): void {
    this.getCreateIdList()
    this.withdrawData = this.formBuilder.group(
      {
        rtfWebsite: ['', [Validators.required]],
        rtfAmount: ['', [Validators.required]]
      }
    )
  }

  getCreateIdList(){
    this.globalService.getWebsiteList().subscribe((res)=>{
      console.log(res)
      this.listData = res
    })
    
  }

  //   // get form data
  rtfFunction(data:any){
    console.log(data)
  }
}
