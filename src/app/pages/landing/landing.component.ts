import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss'],
})
export class LandingComponent implements OnInit {
  advantages: any[];
  year: number;
  constructor() { }

  ngOnInit(): void {
    this.year = new Date().getFullYear();
    this.advantages = [
      { 'text': 'Add your items' },
      { 'text': 'Keep track of your purchases' },
      { 'text': 'Share yout list with your family' },
    ]
  }
}
