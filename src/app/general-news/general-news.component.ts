import { Component, OnInit } from '@angular/core';
import { TcnewsapiService } from '../service/tcnewsapi.service';

@Component({
  selector: 'app-general-news',
  templateUrl: './general-news.component.html',
  styleUrls: ['./general-news.component.css']
})
export class GeneralNewsComponent implements OnInit {

  constructor(private api:TcnewsapiService) { }
  // dispaly general news
  generalnewsData:any =[];
  defaultImage:string = "src\Image\default.png";
   ngOnInit(): void {
     this.api.general().subscribe((result)=>{
       this.generalnewsData = result.articles;
     })
   }

}
