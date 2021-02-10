import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
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

  constructor(private route: ActivatedRoute, private reviewService: ReviewService) { }

  ngOnInit(){
      this.route.paramMap
        .subscribe(params => {
          this.id = parseInt(params.get("id"));
          
          this.reviewService.getReview(this.id).subscribe((result: Review) => {
            this.reviewDetail = result;
          })
        }
      );
  }

}
