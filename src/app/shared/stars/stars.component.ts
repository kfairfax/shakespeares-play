import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-stars',
  templateUrl: './stars.component.html',
  styleUrls: ['./stars.component.scss']
})
export class StarsComponent implements OnInit {
  @Input() rating: number; //where the star component's selector is used, property binding sets the value of rating
  starWidth: number;

  constructor() { }

  ngOnInit(): void {
    this.starWidth = this.rating * 120 / 5;   //mat-icon tag of Angular Material has 24 px default size, so a container for 5 stars is 120px wide
  }


}
