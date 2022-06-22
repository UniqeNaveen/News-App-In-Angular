import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { SportsNewsComponent } from '../sports-news/sports-news.component';

@Injectable({
  providedIn: 'root'
})
export class TcnewsapiService {

  constructor(private _http: HttpClient) {

   }
   baseUrl:string = 'https://newsapi.org/v2/top-headlines?';
   country:string = 'in';
   category:string= 'Sports';
   apiKey:string ='b9c4d5c97df24ab3b305f450fd6e8b00';
   pageSize:number= 100;

   //top headlines API url
  topHeadlinesNews = this.baseUrl+'country='+this.country+'&pageSize='+this.pageSize+'&apiKey='+this.apiKey;

   //technews api url

  technews = this.baseUrl+'country='+this.country+'&category=technology&pageSize='+this.pageSize+'&apiKey='+this.apiKey; 

   // sports news api url

   sportsnews = this.baseUrl+'country='+this.country+'&category=sports&pageSize='+this.pageSize+'&apiKey='+this.apiKey;

   // General news api url

   generalnews = this.baseUrl+'country='+this.country+'&category=general&pageSize='+this.pageSize+'&apiKey='+this.apiKey;

   // entertainment news api url

   entertainmentnews = this.baseUrl+'country='+this.country+'&category=entertainment&pageSize='+this.pageSize+'&apiKey='+this.apiKey;
  
   // business news api url
    
   businessnews = this.baseUrl+'country='+this.country+'&category=business&pageSize='+this.pageSize+'&apiKey='+this.apiKey;

   // health news api url
    
   healthnews = this.baseUrl+'country='+this.country+'&category=health&pageSize='+this.pageSize+'&apiKey='+this.apiKey;

   // science news api url
    
   sciencenews = this.baseUrl+'country='+this.country+'&category=science&pageSize='+this.pageSize+'&apiKey='+this.apiKey;


   //methods

   tcHeadlines():Observable<any>{
    return this._http.get(this.topHeadlinesNews)

   }

   techNews():Observable<any>{
    return this._http.get(this.technews)

   }
   sports():Observable<any>{
    return this._http.get(this.sportsnews)

   }
   general():Observable<any>{
    return this._http.get(this.generalnews)

   }
   entertainment():Observable<any>{
    return this._http.get(this.entertainmentnews)

   }
   business():Observable<any>{
    return this._http.get(this.businessnews)

   }
   health():Observable<any>{
    return this._http.get(this.healthnews)

   }
   science():Observable<any>{
    return this._http.get(this.sciencenews)

   }
}
