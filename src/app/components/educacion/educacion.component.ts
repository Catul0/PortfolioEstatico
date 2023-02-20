import { Component, OnInit } from '@angular/core';
import { Educacion } from '../../Portfolio';
import { EducacionService } from '../../service/educacion.service';
import { Subscription }  from 'rxjs';

@Component({
  selector: 'app-educacion',
  templateUrl: './educacion.component.html',
  styleUrls: ['./educacion.component.css']
})
export class EducacionComponent implements OnInit {
  educacion: Educacion[]=[];
  subscription?: Subscription;
  constructor(
    private educacionService:EducacionService
  ) { }

  ngOnInit(): void {
    this.educacionService.getEducacion().subscribe( educacion =>
      this.educacion = educacion
    );
  }

}
