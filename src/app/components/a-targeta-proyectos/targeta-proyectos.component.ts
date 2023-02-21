import { Component, OnInit } from '@angular/core';
import { ObtenerDatosService } from '../../service/obtener-datos.service';
import { Subscription }  from 'rxjs';
@Component({
  selector: 'app-targeta-proyectos',
  templateUrl: './targeta-proyectos.component.html',
  styleUrls: ['./targeta-proyectos.component.css']
})
export class TargetaProyectosComponent implements OnInit {
  proyectos: any;
  subscription?: Subscription;

  constructor(
    private datosPorfolio:ObtenerDatosService
  ) {}

  ngOnInit(): void {
    this.datosPorfolio.obtenerDatos().subscribe( proyectos =>{
      this.proyectos = proyectos.misProyectos;
    })
  }

}
