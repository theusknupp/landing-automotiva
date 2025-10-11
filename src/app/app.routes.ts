import { Component, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, Routes } from '@angular/router';
import { Products } from './components/products/products';
import { Home } from './components/home/home';

export const routes: Routes = [

    { path: '', component: Home },
    { path: 'produtos', component: Products } 
];
 //Caso necessário criar as rotes, criar o path chamando o component dentro de routes
 // Ex: path: "home" component:"home"