import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ListComponent } from './list/list.component';
import { ReviewsComponent } from './reviews/reviews.component';
import { LearnComponent } from './learn/learn.component';
import { PopularComponent } from './popular/popular.component';

const routes: Routes = [
  {path: '', component: HomeComponent },
  {path: 'list', component: ListComponent },
  {path: 'reviews', component: ReviewsComponent },
  {path: 'learn', component: LearnComponent },
  {path: 'popular', component: PopularComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
