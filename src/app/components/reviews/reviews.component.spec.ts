import { ComponentFixture, inject, TestBed } from '@angular/core/testing';
import { ReviewsComponent } from './reviews.component';
import { HttpClientTestingModule } from "@angular/common/http/testing";
import { ReviewsService } from 'src/app/services/reviews.service';
import { of } from 'rxjs';
import { Router } from '@angular/router';

class MockRouter {
  navigate(url: string) { return url; }
}

describe('ReviewsComponent', () => {
  let component: ReviewsComponent;
  let fixture: ComponentFixture<ReviewsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ReviewsComponent],
      imports: [HttpClientTestingModule],
      providers: [
        { provide: Router, useClass: MockRouter }
      ]
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

  it("should fetch data asynchronously", async () => {   //test if the async call fetches an array of review objects
    const fakedReviewList = [{
      "rating": 0.8,
      "publish_date": "2016-09-05T23:25:47.642350Z",
      "id": "9783221620868",
      "body": "The fool doth think he is wise, but the wise man knows himself to be a fool.",
      "author": "Kaley Schiller"
    }, {
      "rating": 3.2,
      "publish_date": "2016-09-04T23:25:47.642388Z",
      "id": "9793364045824",
      "body": "Can one desire too much of a good thing?.",
      "author": "Fay Lemke"
    }];

    const reviewsService = fixture.debugElement.injector.get(ReviewsService);
    let spy = spyOn(reviewsService, "getReviews").and.returnValues(
      of(fakedReviewList)
    );
    component.ngOnInit();
    fixture.detectChanges();
    fixture.whenStable().then(() => {  //wait for async data
      expect(component.reviews).toBe(fakedReviewList);
      expect(component.reviews.length).toBeGreaterThanOrEqual(1); //the review data array may contain one or more reviews
    });
  });

  it("should call onReviewClick function when a single review is clicked", inject([Router], (router: Router) => {
    const id = 9783221620868;
    const spy = spyOn(router, 'navigate');
    component.onReviewClick(id);
    const navArgs = spy.calls.first().args[0];
    expect(navArgs[0]).toBe('/reviews/' + id, 'should nav to Review component for first review in the list');
  }));

});
