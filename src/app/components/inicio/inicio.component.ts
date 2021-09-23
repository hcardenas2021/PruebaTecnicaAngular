import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {
public titulo: string;
	public subtitulo: string;
	public correo: string;


  constructor() { 
this.titulo="Herver de Jesús Cárdenas Pájaro";
  	this.subtitulo="Desarrollador web";
  	this.correo="inghervercardenas@gmail.com"


  }

  ngOnInit(): void {
  }

}
