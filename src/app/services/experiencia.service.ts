import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Experiencia } from 'src/experiencia';

const httpOptions = {
  headers : new HttpHeaders({
    'Content-Type' : 'application/json'
  })}
@Injectable({
  providedIn: 'root'
})
export class ExperienciaService {
  private apiUrl = 'http://localhost:5000/experiencia_laboral'

  constructor(private http: HttpClient) { }

  get_experiencias(): Observable<Experiencia[]> {
    return this.http.get<Experiencia[]>(this.apiUrl);
  }
  getExperienciaService(experiencia: Experiencia){

  }
  addExperienciaService(experiencia: Experiencia):Observable<Experiencia>{
    return this.http.post<Experiencia>(this.apiUrl,experiencia,httpOptions); 
   }
   editExperienceService(experiencia: Experiencia){

   }
   deleteExperienceService(experiencia: Experiencia){

   }
}
