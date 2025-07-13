import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Header } from '../header/header';
import { About } from '../about/about';

//@Component para identificar que essa classe e um componente
@Component({ 
  selector: 'app-home', //Identificador do component
  imports: [Header, About], 
  templateUrl: './home.html', //Hipertexto
  styleUrl: './home.css' //Estilo do HTML
})
export class Home {

}
