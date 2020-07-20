import { Router } from '@angular/router';
import { Component, Renderer2, ElementRef } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'gotit';
  showHeaderFooter = true;

  constructor(private router: Router, private el: ElementRef, private renderer: Renderer2) {
    router.events.subscribe((val) => {
      this.showHeaderFooter = location.pathname !== '/landing';
      if (location.pathname === '/landing') {
        this.renderer.setAttribute(this.el.nativeElement.ownerDocument.body, 'class', 'landing');
      }
    });
  }
}
