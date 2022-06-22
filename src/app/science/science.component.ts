import { Component, OnInit } from '@angular/core';
import { TcnewsapiService } from '../service/tcnewsapi.service';

@Component({
  selector: 'app-science',
  templateUrl: './science.component.html',
  styleUrls: ['./science.component.css']
})
export class ScienceComponent implements OnInit {

  constructor(private api:TcnewsapiService) { }
  // dispaly science news
sciencenewsData:any =[];
  defaultImage:string = "src\Image\default.png";
   ngOnInit(): void {
     this.api.science().subscribe((result)=>{
       this.sciencenewsData = result.articles;
     })
   }

}
