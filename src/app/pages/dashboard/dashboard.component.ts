import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { GlobalService } from 'src/app/shared/services/global.service';
import {MatDialog } from '@angular/material/dialog';
import { DialogAnimationsExampleDialogComponent } from 'src/app/dialogs/dialog-animations-example-dialog/dialog-animations-example-dialog.component';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  logoUrl:any = "./assets/img/crickfooterbook-logo-final (3).webp"
  dasBanner:any = "./assets/img/d-banner.jpg"
  menu:any

  constructor(private router: Router , public dialog: MatDialog , private globalService: GlobalService){}

  openDialog(){
    let dialogRef = this.dialog.open(DialogAnimationsExampleDialogComponent)
    dialogRef.afterClosed().subscribe((res)=>{
      console.log(res)
      

      if (res) {
        this.globalService.logOut()
        this.router.navigate(['/login'])
        
      }else{
      console.log(res)
      }
    })
  }
}
