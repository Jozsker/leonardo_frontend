import { Component } from '@angular/core';

// Declaramos las variables para jQuery
declare var jQuery:any;
declare var $:any;

@Component({
	selector: 'clientes',
	templateUrl: './clientes.component.html',
	providers: []
})

export class ClientesComponent{
	title = "ClientesComponent";

}