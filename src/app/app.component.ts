import { Component } from '@angular/core';
import {TopHeadlinesComponent} from './top-headlines/top-headlines.component';
import {TcnewsapiService} from './service/tcnewsapi.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'NEWSTC';

  NewsValue:any;

  GetValue(value:any){
    console.log(value);
      this.NewsValue= value;  

  }
  
  
}
