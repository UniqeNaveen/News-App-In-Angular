import { Component, OnInit } from '@angular/core';
import { TcnewsapiService } from '../service/tcnewsapi.service';

@Component({
  selector: 'app-sports-news',
  templateUrl: './sports-news.component.html',
  styleUrls: ['./sports-news.component.css']
})
export class SportsNewsComponent implements OnInit {

  constructor(private api:TcnewsapiService) { }
  // dispaly tech news
  sportsnewsdata:any =[];
  defaultImage:string = "src\Image\default.png";
   ngOnInit(): void {
     this.api.sports().subscribe((result)=>{
       this.sportsnewsdata = result.articles;
       console.log(result.articles)
     })
   }

}
