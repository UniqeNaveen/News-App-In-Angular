import { Component, OnInit } from '@angular/core';
import {TcnewsapiService} from '../service/tcnewsapi.service';

@Component({
  selector: 'app-entertainment-news',
  templateUrl: './entertainment-news.component.html',
  styleUrls: ['./entertainment-news.component.css']
})
export class EntertainmentNewsComponent implements OnInit {

  constructor(private api:TcnewsapiService) { }
  // dispaly Entertain news
  EntertainnewsData:any =[];
  defaultImage:string = "src\Image\default.png";
   ngOnInit(): void {
     this.api.entertainment().subscribe((result)=>{
       this.EntertainnewsData = result.articles;
     })
   }

}
