import { Component, OnInit } from '@angular/core';
import { FormBuilder, MinValidator, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { SnackBarComponent } from 'src/app/dialogs/snack-bar/snack-bar.component';
import { GlobalService } from 'src/app/shared/services/global.service';

@Component({
  selector: 'app-withdraw-id',
  templateUrl: './withdraw-id.component.html',
  styleUrls: ['./withdraw-id.component.css']
})
export class WithdrawIdComponent implements OnInit{
  listData:any
  value:any
  balance:number = 1200
  withdrawData:any
  durationInSeconds:number = 3  
  createdIdList:any
  index:number = 1
  wName:any
  id:any
  amountB:number = 0
  checkBalance:boolean = false
  constructor(private globalService: GlobalService, private formBuilder: FormBuilder,private router: Router, private _snackBar: MatSnackBar, private actrouter:ActivatedRoute){}


  ngOnInit(): void {
    
    
    // get parameter id
    this.actrouter.paramMap.subscribe((res)=>{
      console.log(res.get('id'))
      this.id = res.get('id')
    })
    
    this.getSingleWebsite(this.id)
    this.withdrawData = this.formBuilder.group(
      {
        rtfAmount: ['', [Validators.required]]
      }
    )
    
  }
  
  getSingleWebsite(id:any){
    this.globalService.getSingleWebsite(id).subscribe((res)=>{
      console.log(res)
      this.listData = res
      this.amountB = this.listData.amount
      
    })
    
  }
  changeFun(){
    this.checkBalance = false
  }

  // get form data
  rtfFunction(data:any){
    if(this.amountB  > data.rtfAmount){
      console.log(data)
      this._snackBar.openFromComponent(SnackBarComponent, {
        duration: this.durationInSeconds * 1000,
      });
      this.router.navigate(['dashboard/home'])
    }else{
      this.checkBalance = true

    }

  }
  

}
