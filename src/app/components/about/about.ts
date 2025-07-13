import { Component, ElementRef, ViewChild, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.html',
  styleUrls: ['./about.css']
})
export class About implements AfterViewInit {

  @ViewChild('sobrenosSection', { static: true }) sobrenosSection!: ElementRef; /*Capturando elemento com ID* | ElementRef acessando o HTML */

  ngAfterViewInit(): void {
    const observer = new IntersectionObserver(entries => { /*Intersection > para observar */
      entries.forEach(entry => {
        if (entry.isIntersecting) { /*Retorna TRUE se o elemtno estiver vísivel na tela*/
          this.sobrenosSection.nativeElement.classList.add('animate');
        } else {
          this.sobrenosSection.nativeElement.classList.remove('animate');
        }
      });
    }, {
      threshold: 0.20 // Quando 30% da seção estiver visível
    });

    observer.observe(this.sobrenosSection.nativeElement);
  }
}