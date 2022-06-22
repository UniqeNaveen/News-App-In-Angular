import { Component, OnInit } from '@angular/core';
import {TcnewsapiService} from '../service/tcnewsapi.service';

@Component({
  selector: 'app-tech-news',
  templateUrl: './tech-news.component.html',
  styleUrls: ['./tech-news.component.css']
})
export class TechNewsComponent implements OnInit {

  constructor(private api:TcnewsapiService) { }
 // dispaly tech news
 technewsData:any =[];
 defaultImage:string = "src\Image\default.png";
  ngOnInit(): void {
    this.api.techNews().subscribe((result)=>{
      this.technewsData = result.articles;
    })
  }

}
