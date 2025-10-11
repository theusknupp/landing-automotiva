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

}
