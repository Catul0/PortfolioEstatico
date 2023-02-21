import { Component, OnInit } from '@angular/core';
import { Subscription }  from 'rxjs';
import { ObtenerDatosService } from 'src/app/service/obtener-datos.service';

@Component({
  selector: 'app-experiencia',
  templateUrl: './experiencia.component.html',
  styleUrls: ['./experiencia.component.css']
})
export class ExperienciaComponent implements OnInit {
  experiencia:any;
  subscription?: Subscription;
  constructor(
    private obtenerDatos:ObtenerDatosService
  ) { }

  ngOnInit(): void {
    this.obtenerDatos.obtenerDatos().subscribe(data=>{
      this.experiencia=data.experiencia;
    })
  }

}
