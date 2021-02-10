import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Review } from 'src/app/models/review.model';
import { ReviewService } from 'src/app/services/review.service';

@Component({
  selector: 'app-review',
  templateUrl: './review.component.html',
  styleUrls: ['./review.component.scss'],
  providers: [ReviewService]
})
export class ReviewComponent implements OnInit {
  id: number;
  reviewDetail: Review;

  constructor(private route: ActivatedRoute, private reviewService: ReviewService, private router: Router) { }

  ngOnInit() {
    this.route.paramMap
      .subscribe(params => {
        this.id = parseInt(params.get("id")); //get review id from url param

        this.reviewService.getReview(this.id).subscribe((result: Review) => { //use review id to get the corresponding review object
          this.reviewDetail = result;
        })
      }
      );
  }

  navigateToReviews() {
    this.router.navigateByUrl('/reviews'); //navigate to the reviews page when the back button is clicked, pagination order is not preserved
  }

}
