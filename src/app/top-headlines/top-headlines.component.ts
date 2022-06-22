import { Component, OnInit } from '@angular/core';
import {TcnewsapiService} from '../service/tcnewsapi.service';
@Component({
  selector: 'app-top-headlines',
  templateUrl: './top-headlines.component.html',
  styleUrls: ['./top-headlines.component.css']
})
export class TopHeadlinesComponent implements OnInit {

  constructor(private api: TcnewsapiService) { }
//display headline data
topHeadlineData:any =[];
  ngOnInit(): void {
         this.api.tcHeadlines().subscribe((result)=>{
          //console.log(result.articles);
          this.topHeadlineData = result.articles;
         })
  }

}
