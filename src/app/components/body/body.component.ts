import { Component } from '@angular/core';


@Component({
    //poniendo el selector en el app.component.html se muestra todo lo que hay en este componente el header
    selector: 'app-body',
    //este llama al html component del header navbar
    templateUrl: './body.component.html'
})

export class BodyComponent{

    mostrar= true;

    frase: any ={
        mensaje:'Un cafe caliente siempre ayuda',
        autor:'Marquito'
    };

    personajes :string[]=['Capuchino', 'Mokachino', 'Cortado']
}