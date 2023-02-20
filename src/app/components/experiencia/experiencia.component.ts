import { Component, OnInit } from '@angular/core';
import { Experiencia } from '../../Portfolio';
import { ExperienciaService } from '../../service/experiencia.service';
import { Subscription }  from 'rxjs';

@Component({
  selector: 'app-experiencia',
  templateUrl: './experiencia.component.html',
  styleUrls: ['./experiencia.component.css']
})
export class ExperienciaComponent implements OnInit {
  experiencias: Experiencia[]=[];
  subscription?: Subscription;
  constructor(
    private experienciaService:ExperienciaService
  ) { }

  ngOnInit(): void {
    this.experienciaService.getExperiencia().subscribe( experiencias =>
      this.experiencias = experiencias
    );
  }

}
