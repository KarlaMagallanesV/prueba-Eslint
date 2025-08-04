import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <h1>Bienvenido a mi app</h1>
    <!-- TODO: implementar autenticación -->
  `,
})
export class AppComponent {
  title = 'mi-aplicacion-angular';

  constructor() {
    console.log('AppComponent inicializado'); 
  }

  ngOnInit() {
    let mensaje = 'Hola mundo'; 
    console.log(mensaje);   
  }
}
