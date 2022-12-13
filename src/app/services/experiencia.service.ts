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
  private apiUrl = 'http://portfolio-backend-marianopuchetta.koyeb.app/'

  constructor(private http: HttpClient) { }

  getExperienciasService(): Observable<Experiencia[]> {
    return this.http.get<Experiencia[]>(this.apiUrl + "experiencias");
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
