import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable()
export class ReviewsService {
  constructor(private http: HttpClient) { }

  getReviews() {
    const url = "https://shakespeare.podium.com/api/reviews";

    const customHeader = {
      'X-Api-Key': 'H3TM28wjL8R4#HTnqk?c'
    }

    const requestOptions = {
      headers: new HttpHeaders(customHeader),
      'Content-Type': 'application/json'
    };

    return this.http.get(url, requestOptions);
  }
}