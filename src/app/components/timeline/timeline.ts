import { Component, ElementRef, ViewChild, AfterViewInit } from '@angular/core';
import { Works } from '../works/works';

@Component({
  selector: 'app-timeline',
  imports: [Works],
  templateUrl: './timeline.html',
  styleUrl: './timeline.css'
})
export class Timeline implements AfterViewInit {

  @ViewChild('timelineSection', { static: true }) timelineSection!: ElementRef;

  ngAfterViewInit(): void {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          this.timelineSection.nativeElement.classList.add('animate'); /*Somente add para animar só uma vez*/
          observer.unobserve(this.timelineSection.nativeElement);
        }
      });
    }, {
      threshold: 0.2
    });

    observer.observe(this.timelineSection.nativeElement);
  }
}