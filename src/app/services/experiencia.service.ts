import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Experiencia } from 'src/experiencia';

const httpOptions = {
  'Content-Type' : 'application/json'
}
@Injectable({
  providedIn: 'root'
})
export class ExperienciaService {
  private apiUrl = 'http://localhost:5000/experiencia_laboral'

  constructor(private http: HttpClient) { }

  get_experiencias() : Observable<Experiencia[]>{
    return this.http.get<Experiencia[]>(this.apiUrl);
  }
}
