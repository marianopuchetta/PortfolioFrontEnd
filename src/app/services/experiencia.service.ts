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

  getExperienciasService(): Observable<Experiencia[]> {
    return this.http.get<Experiencia[]>(this.apiUrl);
  }
  getExperienciaService(experiencia: Experiencia): Observable<Experiencia>{
    const url = `${this.apiUrl}/${experiencia.id}`;
    return this.http.get<Experiencia>(url);
  }
  addExperienciaService(experiencia: Experiencia):Observable<Experiencia>{
    return this.http.post<Experiencia>(this.apiUrl,experiencia,httpOptions); 
   }
   editExperienciaService(experiencia: Experiencia):Observable<Experiencia>{
    const url = `${this.apiUrl}/${experiencia.id}`;
    return this.http.put<Experiencia>(url,experiencia,httpOptions);
   }
   deleteExperienceService(experiencia: Experiencia):Observable<Experiencia>{
    const url =  `${this.apiUrl}/${experiencia.id}`;
    return this.http.delete<Experiencia>(url);
   }
}
