import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { SnackBarComponent } from 'src/app/dialogs/snack-bar/snack-bar.component';
import { GlobalService } from 'src/app/shared/services/global.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  imgUrl:any =  "./assets/img/login_page.png"
  uname:any
  userpass:any
  logoUrl:any = "./assets/img/crickfooterbook-logo-final (3).webp"
  uData:any
  signUpData:any
  durationInSeconds:number = 3
  constructor(private formBuilder: FormBuilder, private globalService: GlobalService , private router: Router, private snakerBar: MatSnackBar){}

  ngOnInit(): void {
    this.signUpData = this.formBuilder.group(
      {
        number: ['', [Validators.required, Validators.pattern('[0-9999999999]{10}')]],
        cpassword: ['', [Validators.required]],
        password: ['', [Validators.required, Validators.pattern('^(?=.*[A-Z])[a-zA-z]{8}')]]
      }
    )
  }

  rtfFunction(data:any){
    console.log(data)
    if(data.cpassword == data.password){
      const Sdata = {
        username : data.number,
        password: data.password,
        current_balance: 1200
        
      }
      this.globalService.signUpUser(Sdata).subscribe((res)=>{
        console.log(res)
        this.snakerBar.openFromComponent(SnackBarComponent, {
          duration: this.durationInSeconds * 1000,
        });
        this.router.navigate(['../login'])
      })
    }else{
      alert("password  not match")
    }
  }
}
