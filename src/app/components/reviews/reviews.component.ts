import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { Review } from 'src/app/models/review.model';
import { ReviewsService } from 'src/app/services/reviews.service';
import { MatPaginator, PageEvent } from '@angular/material/paginator';

@Component({
  selector: 'app-reviews',
  templateUrl: './reviews.component.html',
  styleUrls: ['./reviews.component.scss'],
  providers: [ReviewsService]
})

export class ReviewsComponent implements OnInit {
  reviews: Review[];
  partialReviews: Review[] = [];
  length = 0;//total number of items being paged
  pageSize = 5;  //display 5 items per page
  pageIndex = 0;  //current page index defaults to 0
  pageSizeOptions = [5, 10, 25];
  showFirstLastButtons = true;

  @ViewChild(MatPaginator) paginator: MatPaginator; 

  constructor(private reviewsService: ReviewsService, private router: Router) { }

  ngOnInit() {
    this.reviewsService.getReviews().subscribe((result: Review[]) => {
        this.reviews = result;
        this.length = this.reviews.length;
        this.iterator();
      });
  }

  onReviewClick(id) {
    this.router.navigate(['/reviews/' + id]);
  }

  handlePageEvent(event: PageEvent) {
    this.length = event.length; 
    this.pageSize = event.pageSize;  
    this.pageIndex = event.pageIndex;
    this.iterator();
  }

  private iterator() {
    const end = (this.pageIndex + 1) * this.pageSize;
    const start = this.pageIndex * this.pageSize;
    const part = this.reviews.slice(start, end);
    this.partialReviews = part;
  }
}
