import { Component, OnInit, inject } from '@angular/core';
import {MatSnackBar} from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { SnackBarComponent } from 'src/app/dialogs/snack-bar/snack-bar.component';
import { GlobalService } from 'src/app/shared/services/global.service';

@Component({
  selector: 'app-withdraw-account',
  templateUrl: './withdraw-account.component.html',
  styleUrls: ['./withdraw-account.component.css']
})
export class WithdrawAccountComponent implements OnInit {
  isBank:boolean = false
  bankList:any
  status:boolean = false
  statusAmount:boolean = false
  durationInSeconds:any = 3;
  balance:number = 1200
  uData:any
  constructor(private globalService: GlobalService, private _snackBar: MatSnackBar , private router: Router){}




  // openSnackBar(message:any){
  //   this._snackBar.open(message)
  // }
  // openSnackBar(message:any) {
  //   this._snackBar.openFromComponent(SnackBarComponent, {
  //     duration: this.durationInSeconds * 1000,
  //   });
  // }

  ngOnInit(): void {
    this.globalService.getBankDetails().subscribe((res)=>{
      let resLenght = res.isPrototypeOf
      this.uData = res
      const filterUdata = this.uData.filter((item:any)=>{
        return item.id
      })
      console.log(filterUdata.length)

      if(filterUdata.length > 0){
        this.isBank = true
        this.bankList = res
      }
      console.log(res)
      

    })
  }


  withDrawAccount(data:any){
    if(this.balance  > data.ammount){
      console.log(data)
      this.statusAmount = false
      this._snackBar.openFromComponent(SnackBarComponent, {
        duration: this.durationInSeconds * 1000,
      });

      this.router.navigate(['/dashboard/withdraw-account'])
      

    }else{
      this.statusAmount = true
    }
  }



}

