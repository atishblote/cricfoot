import { Component, OnInit } from '@angular/core';
import { GlobalService } from 'src/app/shared/services/global.service';

@Component({
  selector: 'app-create-id',
  templateUrl: './create-id.component.html',
  styleUrls: ['./create-id.component.css']
})
export class CreateIdComponent implements OnInit{
  websiteData:any
  term:any

  constructor(private globalService: GlobalService){}

  ngOnInit(): void {
    this.getWebsiteist()  
  }

  getWebsiteist(){
    this.globalService.getWebsiteList().subscribe((res)=>{
      console.log(res)
      this.websiteData = res
      

    })
  }
}
