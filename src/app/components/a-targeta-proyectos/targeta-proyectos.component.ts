import { Component, OnInit } from '@angular/core';
import { Proyecto} from '../../Portfolio';
import { ProyectosService } from '../../service/proyectos.service';
import { UiService } from '../../service/ui.service';
import { Subscription }  from 'rxjs';
@Component({
  selector: 'app-targeta-proyectos',
  templateUrl: './targeta-proyectos.component.html',
  styleUrls: ['./targeta-proyectos.component.css']
})
export class TargetaProyectosComponent implements OnInit {
  proyectos: Proyecto[] = [];
  showAddProyect: boolean=false;
  subscription?: Subscription;

  constructor(
    private proyectosService: ProyectosService,
    private uiServise: UiService,
    public loginPrd:UiService
  ) { 
    this.subscription = this.uiServise.onToggle().subscribe(value => this.showAddProyect = value)
  }

  ngOnInit(): void {
    this.proyectosService.getProyecto().subscribe( proyectos =>
      this.proyectos = proyectos
    );
  }

}
