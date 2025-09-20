import { Component } from '@angular/core';
import { Footer } from '../footer/footer';
import { Contact } from '../contact/contact';

@Component({
  selector: 'app-map',
  imports: [Contact, Footer],
  templateUrl: './map.html',
  styleUrl: './map.css'
})
export class Map {

}
