import { Component, OnInit } from '@angular/core';
import {TcnewsapiService} from '../service/tcnewsapi.service';

@Component({
  selector: 'app-business',
  templateUrl: './business.component.html',
  styleUrls: ['./business.component.css']
})
export class BusinessComponent implements OnInit {

  constructor(private api:TcnewsapiService) { }
  // dispaly Business news
  bsinessnewsData:any =[];
  defaultImage:string = "src\Image\default.png";
   ngOnInit(): void {
     this.api.business().subscribe((result)=>{
       this.bsinessnewsData = result.articles;
     })
   }

}
