import { Component } from '@angular/core';
import { Header } from '../header/header';
import { Footer } from '../footer/footer';

@Component({
  selector: 'app-products',
  imports: [Header, Footer],
  templateUrl: './products.html',
  styleUrl: './products.css'
})
export class Products {
    ngOnInit(): void {
    // Força a janela a rolar para o topo (coordenadas x:0, y:0)
    // Para corrigir scroll ao vir da pagina works para products e o scroll estar no fim da página
    window.scrollTo(0, 0); 
  }
}
