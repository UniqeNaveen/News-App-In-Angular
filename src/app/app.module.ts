import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopHeadlinesComponent } from './top-headlines/top-headlines.component';
import {HttpClientModule} from '@angular/common/http';
import {TcnewsapiService} from './service/tcnewsapi.service';
import { TechNewsComponent } from './tech-news/tech-news.component';
import { LoadingBarHttpClientModule } from '@ngx-loading-bar/http-client';
import { SportsNewsComponent } from './sports-news/sports-news.component';
import { GeneralNewsComponent } from './general-news/general-news.component';
import { EntertainmentNewsComponent } from './entertainment-news/entertainment-news.component';
import { BusinessComponent } from './business/business.component';
import { HealthComponent } from './health/health.component';
import { ScienceComponent } from './science/science.component';

@NgModule({
  declarations: [
    AppComponent,
    TopHeadlinesComponent,
    TechNewsComponent,
    SportsNewsComponent,
    GeneralNewsComponent,
    EntertainmentNewsComponent,
    BusinessComponent,
    HealthComponent,
    ScienceComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    LoadingBarHttpClientModule
  ],
  providers: [TcnewsapiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
