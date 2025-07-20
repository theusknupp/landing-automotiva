import { Component, ElementRef, ViewChild, AfterViewInit } from '@angular/core';
import { Timeline } from '../timeline/timeline';

@Component({
  selector: 'app-about',
  templateUrl: './about.html',
  imports: [Timeline],
  styleUrls: ['./about.css']
})
export class About implements AfterViewInit {

  @ViewChild('sobrenosSection', { static: true }) sobrenosSection!: ElementRef; /*Capturando elemento com ID* | ElementRef acessando o HTML */

  ngAfterViewInit(): void {
    const observer = new IntersectionObserver(entries => { /*Intersection > para observar */
      entries.forEach(entry => {
        if (entry.isIntersecting) { /*Retorna TRUE se o elemtno estiver vísivel na tela*/
          this.sobrenosSection.nativeElement.classList.add('animate'); /*Somente add para animar só uma vez*/
        } 
      });
    }, {
      threshold: 0.30 // Quando 30% da seção estiver visível
    });

    observer.observe(this.sobrenosSection.nativeElement);
  }
}