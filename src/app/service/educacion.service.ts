import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Educacion } from '../Portfolio';

@Injectable({
  providedIn: 'root'
})
export class EducacionService {

  private urlEdu= 'http://localhost:5000/educacion'
  constructor(
    private http: HttpClient) { }
  
  getEducacion(): Observable<Educacion[]>{
    return this.http.get<Educacion[]>(this.urlEdu)
  }
}
