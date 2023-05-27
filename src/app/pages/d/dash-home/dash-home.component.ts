import { Component, OnInit } from '@angular/core';
import { GlobalService } from 'src/app/shared/services/global.service';

@Component({
  selector: 'app-dash-home',
  templateUrl: './dash-home.component.html',
  styleUrls: ['./dash-home.component.css']
})
export class DashHomeComponent implements OnInit {
  logoUrl:any = "./assets/img/crickfooterbook-logo-final (3).webp"
  dasBanner:any = "./assets/img/d-banner.jpg"
  createdIdList:any
  id:any
  website:any
  imgurl:any
  username:any
  constructor(private globalService: GlobalService){}

  ngOnInit(): void {
    this.globalService.getCreateIDData().subscribe((res)=>{
      this.createdIdList = res
      console.log(this.createdIdList)

      const resData = this.createdIdList
      resData.reverse()
      const singleData = this.createdIdList[0]
      this.id = singleData.id
      this.website = singleData.website
      this.username = singleData.username
      this.imgurl = singleData.img_url
    })
  }

}
