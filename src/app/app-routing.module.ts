import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {TopHeadlinesComponent} from './top-headlines/top-headlines.component';
import {TechNewsComponent} from './tech-news/tech-news.component';
import {SportsNewsComponent} from './sports-news/sports-news.component';
import {BusinessComponent} from './business/business.component';
import {EntertainmentNewsComponent} from './entertainment-news/entertainment-news.component';
import {GeneralNewsComponent} from './general-news/general-news.component';
import {HealthComponent} from './health/health.component';
import {ScienceComponent} from './science/science.component';

const routes: Routes = [
  {path:'',component:TopHeadlinesComponent},//top headline & home.
  {path:'technews',component:TechNewsComponent},//technology news.
  {path:'sports',component:SportsNewsComponent},//sports news.
  {path:'BusinessNews',component:BusinessComponent},//sports news.
  {path:'EntertainmentNews',component:EntertainmentNewsComponent},//sports news.
  {path:'GeneralNews',component:GeneralNewsComponent},//sports news.
  {path:'HealthNews',component:HealthComponent},//sports news.
  {path:'ScienceNews',component:ScienceComponent},//sports news.
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
