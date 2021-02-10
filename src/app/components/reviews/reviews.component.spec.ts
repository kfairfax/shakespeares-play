import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReviewsComponent } from './reviews.component';
import { RouterTestingModule } from "@angular/router/testing";
import { HttpClientTestingModule } from "@angular/common/http/testing";
import { ReviewsService } from 'src/app/services/reviews.service';
import {  of } from 'rxjs';

describe('ReviewsComponent', () => {
  let component: ReviewsComponent;
  let fixture: ComponentFixture<ReviewsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReviewsComponent ],
      imports:[RouterTestingModule, HttpClientTestingModule]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReviewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy(); //tests if the instance of the component that is created is defined
  });

  it("should fetch review data asynchronously", async() => {
    const fakedReviewList = [{
      "rating": 0.8,
      "publish_date": "2016-09-05T23:25:47.642350Z",
      "id": "9783221620868",
      "body": "The fool doth think he is wise, but the wise man knows himself to be a fool.",
      "author": "Kaley Schiller"
      }];

      const reviewsService = fixture.debugElement.injector.get(ReviewsService);
      let spy = spyOn(reviewsService, "getReviews").and.returnValue(
        of(fakedReviewList)
      );
      component.ngOnInit();
      fixture.detectChanges();
      fixture.whenStable().then(() => {
        expect(component.reviews).toBe(fakedReviewList);
      });
  });

});
