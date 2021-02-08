import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReviewComponent } from './components/review/review.component';
import { ReviewsComponent } from './components/reviews/reviews.component';

const routes: Routes = [
  { path: 'reviews', pathMatch: 'full', component: ReviewsComponent },
  { path: 'reviews/:id', component: ReviewComponent },
  { path: '', redirectTo: '/reviews', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
