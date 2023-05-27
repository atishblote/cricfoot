import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { GlobalService } from 'src/app/shared/services/global.service';
import {MatDialog } from '@angular/material/dialog';
import { DialogAnimationsExampleDialogComponent } from 'src/app/dialogs/dialog-animations-example-dialog/dialog-animations-example-dialog.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  showFiller = false;
  constructor(private globalService: GlobalService, private router: Router , public dialog: MatDialog){}


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

  // logOutUser(){
    
  // }
}
