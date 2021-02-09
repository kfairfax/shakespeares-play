import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Review } from 'src/app/models/review.model';
import { ReviewsService } from 'src/app/services/reviews.service';

@Component({
  selector: 'app-reviews',
  templateUrl: './reviews.component.html',
  styleUrls: ['./reviews.component.scss'],
  providers: [ReviewsService]
})

export class ReviewsComponent implements OnInit {
  reviews:Review[];

  constructor(private reviewsService: ReviewsService, private router: Router) { }

  ngOnInit(){
    this.reviewsService.getReviews().subscribe((result:Review[]) => {
      this.reviews = result;
    });
  }

  onReviewClick(id){
    this.router.navigate(['/reviews/' + id]);
  }

}
