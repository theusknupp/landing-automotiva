import { AfterViewInit, Component, ElementRef, ViewChild, ViewChildren, QueryList } from '@angular/core';
import { Map} from '../map/map';

@Component({
  selector: 'app-works',
  imports: [Map],
  templateUrl: './works.html',
  styleUrls: ['./works.css']
})
export class Works implements AfterViewInit {

  @ViewChild('workSection', { static: true }) workSection!: ElementRef; /*Capturando worksection pois vai observar a tela inteira*/
  @ViewChildren('cardsContainer') cardsContainers!: QueryList<ElementRef>; /*Capturando cardscontainer pois é quem vai ter a add do .animate*/

  ngAfterViewInit(): void {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          this.cardsContainers.forEach(card => {
            card.nativeElement.classList.add('animate');
          });
          observer.unobserve(this.workSection.nativeElement);
        }
      });
    }, {
      threshold: 0.2
    });

    observer.observe(this.workSection.nativeElement);
  }
}