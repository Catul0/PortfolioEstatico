import { Component, OnInit } from '@angular/core';
import { Subscription }  from 'rxjs';
import { ObtenerDatosService } from 'src/app/service/obtener-datos.service';

@Component({
  selector: 'app-targeta-skills',
  templateUrl: './targeta-skills.component.html',
  styleUrls: ['./targeta-skills.component.css']
})
export class TargetaSkillsComponent implements OnInit {
  habilidades:any;
  showAddSkill: boolean=false;
  subscription?: Subscription;
  constructor(
    private obtenerDatos:ObtenerDatosService
  ) {
  }

  ngOnInit(): void {
    this.obtenerDatos.obtenerDatos().subscribe(data=>{
      this.habilidades=data.misSkills;
    })
  }

}
