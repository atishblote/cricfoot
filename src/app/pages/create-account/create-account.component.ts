import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { GlobalService } from 'src/app/shared/services/global.service';

@Component({
  selector: 'app-create-account',
  templateUrl: './create-account.component.html',
  styleUrls: ['./create-account.component.css']
})
export class CreateAccountComponent implements OnInit {

  username: any
  amount: any
  utr: any
  id: any
  empData:any
  resData: any = {
    utr: "",
    name: "",
    amount : ""
    
  }
  firstFormGroup: any
  secondFormGroup: any
  qrCodeUrl:any = '/assets/img/qr.png'
  phonePayUrl:any = '/assets/img/phone_pe.png'

  showImg_url:any 
  showWebsite: any
  showName: any

  responceStatus: boolean = false

  // step second
  step = 0;

  setStep(index: number) {
    this.step = index;
  }

  nextStep() {
    this.step++;
  }

  prevStep() {
    this.step--;
  }


  constructor(private globalService: GlobalService, private actrouter: ActivatedRoute)  {
    this.firstFormGroup = new FormGroup(
      {
        username: new FormControl(
          "", [
          Validators.required
        ]
        ),
        amount: new FormControl(
          "", [
          Validators.required
        ]
        ),
        utr: new FormControl("",[Validators.required]),
        website: new FormControl(""),
        name: new FormControl(""),
        img_url: new FormControl("")
      } 
    )
  }

  ngOnInit(): void {
    this.actrouter.paramMap.subscribe((res) => {
      this.id = res.get('id')
      // console.log(this.id)

      this.globalService.getAccountSingleId(this.id).subscribe((res)=>{
      console.log(res)       
      this.empData = {...res}
      console.log(this.empData.img_url)
      this.showImg_url = this.empData.img_url
      this.showWebsite = this.empData.website
      this.showName = this.empData.name
      console.log(this.empData.id)
      })

    })
  }

  // getWebsiteDetails(){
  //   this.globalService.getWebsiteList()
  // }

  isLinear = false;



  submitCreateID(fData:any) {
    const formCreateData = {
      username: fData.username,
      amount: fData.amount,
      utr: fData.utr,
      website: this.showWebsite,
      name: this.showName,
      img_url: this.showImg_url,
      date: "2023/01/01",
      userid: "admin"
    }

    if((fData.username) && (fData.amount) && (fData.utr)){
      console.log(formCreateData)
      this.globalService.updateCreateIDData(formCreateData).subscribe((res)=>{
        this.resData = {...res}
        alert("Data uploaded successfuly")
        this.username = ""
      this.amount = ""
      this.utr = ""
      this.responceStatus = true
      })
    }else{
      console.log("Fill all the details correctly ")
    }
  }
}
