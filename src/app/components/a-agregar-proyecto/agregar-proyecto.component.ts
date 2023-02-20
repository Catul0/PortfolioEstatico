import { Component, OnInit, Output,EventEmitter } from '@angular/core';
import { Proyecto } from '../../Portfolio';
import { UiService } from '../../service/ui.service';
import { Subscription }  from 'rxjs';

@Component({
  selector: 'app-agregar-proyecto',
  templateUrl: './agregar-proyecto.component.html',
  styleUrls: ['./agregar-proyecto.component.css']
})
export class AgregarProyectoComponent implements OnInit {
  @Output() onAddProyect: EventEmitter<Proyecto> = new EventEmitter();
  subscription?: Subscription;
  id: number=0;
  title: string="";
  text: string="";
  photo: string="./assets/imagenes/default.png";
  link: string="#proyectoss";
  showAddProyect: boolean=false;
  constructor(
    private uiServise: UiService
  ) { 
    this.subscription = this.uiServise.onToggle().subscribe(value => this.showAddProyect = value)
  }

  ngOnInit(): void {
  }

}
