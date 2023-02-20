import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Experiencia } from '../Portfolio';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})
export class ExperienciaService {
  private urlExpe= 'http://localhost:5000/experiencia'
  constructor(
    private http: HttpClient) { }
  
  getExperiencia(): Observable<Experiencia[]>{
    return this.http.get<Experiencia[]>(this.urlExpe)
  }
}
