import { Component, OnInit } from '@angular/core';
import { FormBuilder, MinValidator, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { SnackBarComponent } from 'src/app/dialogs/snack-bar/snack-bar.component';
import { GlobalService } from 'src/app/shared/services/global.service';

@Component({
  selector: 'app-withdraw',
  templateUrl: './withdraw.component.html',
  styleUrls: ['./withdraw.component.css']
})
export class WithdrawComponent implements OnInit  {

  listData:any
  balance:number = 1200
  withdrawData:any
  durationInSeconds:number = 3  
  constructor(private globalService: GlobalService, private formBuilder: FormBuilder, private _snackBar: MatSnackBar){}


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

  // get form data
  rtfFunction(data:any){
    if(this.balance  > data.rtfAmount){
      console.log(data)
      this._snackBar.openFromComponent(SnackBarComponent, {
        duration: this.durationInSeconds * 1000,
      });
    }else{
      
    }

  }
  

}
