import { Component, OnInit } from '@angular/core';
import { TcnewsapiService } from '../service/tcnewsapi.service';

@Component({
  selector: 'app-health',
  templateUrl: './health.component.html',
  styleUrls: ['./health.component.css']
})
export class HealthComponent implements OnInit {

  constructor(private api:TcnewsapiService) { }
  // dispaly health news
 healthnewsData:any =[];
  defaultImage:string = "src\Image\default.png";
   ngOnInit(): void {
     this.api.health().subscribe((result)=>{
       this.healthnewsData = result.articles;
     })
   }

}
