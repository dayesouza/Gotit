import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent implements OnInit {
  year: number;
  @Input() landing: boolean;

  constructor() {
    this.year = new Date().getFullYear();
  }

  ngOnInit(): void {
  }
}
