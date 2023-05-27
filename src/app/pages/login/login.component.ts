import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GlobalService } from 'src/app/shared/services/global.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  imgUrl:any =  "./assets/img/login_page.png"
  uname:any
  userpass:any
  logoUrl:any = "./assets/img/crickfooterbook-logo-final (3).webp"
  uData:any
  loginDatat:any
  constructor(private globalService: GlobalService , private router: Router){}

  ngOnInit(): void {
 
  }
  getSignUpDetails(){
    console.log(this.uname)
    console.log(this.userpass)
    this.globalService.getUserData().subscribe((res)=>{
      console.log(res);
      this.uData = res
      const filterUdata = this.uData.filter((item:any)=>{
        return item.username == this.uname && item.password == this.userpass
      })
      console.log(filterUdata);
      if(filterUdata.length > 0){
        this.globalService.userLogin(this.uname)
        this.router.navigate(['/dashboard/home'])
      }else{
        alert("Login Details wrong")
        this.uname = ""
        this.userpass = ""
      }


    })
  }
}
