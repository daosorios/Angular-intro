import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {
  
  //el año cambiara automaticamente en el footer
  anio: Number;
  constructor() { 
    this.anio=new Date().getFullYear();
  }


}
