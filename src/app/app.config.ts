import { ApplicationConfig, provideBrowserGlobalErrorListeners, provideZoneChangeDetection } from '@angular/core';
import { provideRouter, withInMemoryScrolling } from '@angular/router';

import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(
      routes,
      withInMemoryScrolling({
        //Função para resolver o problema ao redirecionar para o produtos vindo da home e a página abrir no final do scroll
                // 'enabled': Rola para o topo, mas memoriza a posição ao usar os botões de voltar/avançar do navegador.
        scrollPositionRestoration: 'enabled', 
      })
    ),
  ],
};