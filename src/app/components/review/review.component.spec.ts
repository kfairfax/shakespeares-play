import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReviewComponent } from './review.component';
import { RouterTestingModule } from "@angular/router/testing";
import { HttpClientModule } from '@angular/common/http';
import { ReviewService } from 'src/app/services/review.service';
import { of } from 'rxjs';

describe('ReviewComponent', () => {
  let component: ReviewComponent;
  let fixture: ComponentFixture<ReviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ReviewComponent],
      imports: [RouterTestingModule, HttpClientModule],
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should fetch data asynchronously', async () => { //test if the async call fetches one review object
    const fakedReviewItem = {
      "rating": 4.1,
      "publish_date": "2016-09-03T23:25:47.642545Z",
      "id": "9784620626604",
      "body": "How bitter a thing it is to look into happiness through another man's eyes!",
      "author": "Tatyana Olson"
    }

    const reviewService = fixture.debugElement.injector.get(ReviewService);
    let spy = spyOn(reviewService, "getReview").and.returnValue(
      of(fakedReviewItem)
    );
    component.ngOnInit();
    fixture.detectChanges();
    fixture.whenStable().then(() => {
      expect(component.reviewDetail).toBe(fakedReviewItem);
      expect(Object.keys(fakedReviewItem).length).toBe(1); //there should only be one data object 
    });
  });

});
