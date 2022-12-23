import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Trayecto } from 'src/trayecto';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})
export class TrayectoService {
  private apiUrl = 'https://portfolio-backend-marianopuchetta.koyeb.app/'

  constructor(
    private http: HttpClient) { }


  get_trayectos(): Observable<Trayecto[]> {
    return this.http.get<Trayecto[]>(this.apiUrl + "trayectos");
  }
  get_trayecto(trayecto: Trayecto): Observable<Trayecto> {
    const url = `${this.apiUrl}` + "trayecto/" + `${trayecto.id}`;
    return this.http.get<Trayecto>(url);
  }
  deleteTrayectoService(trayecto: Trayecto): Observable<Trayecto> {
    const url = `${this.apiUrl}` + "deletetrayecto/" + `${trayecto.id}`;
    return this.http.delete<Trayecto>(url)
  }
  editTrayectoService(trayecto: Trayecto) {
    const url = `${this.apiUrl}` + "edittrayecto/" + `${trayecto.id}`;
    return this.http.put<Trayecto>(url, trayecto, httpOptions);
  }
  addTrayectoService(trayecto: Trayecto): Observable<Trayecto> {
    const url = `${this.apiUrl}` + "newtrayecto";
    return this.http.post<Trayecto>(url, trayecto, httpOptions);
  }
}

