import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Trayecto } from 'src/trayecto';

const httpOptions = {
  headers : new HttpHeaders({
    'Content-Type' : 'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})
export class DataService {
 private apiUrl = 'http://localhost:5000/trayectoria_educativa'
  constructor(
    private http: HttpClient) {

  }
  get_data(): Observable<any> {
    return this.http.get('./assets/data/data.json');
  }

  get_trayectos(): Observable<Trayecto[]> {

    return this.http.get<Trayecto[]>(this.apiUrl);
  }
  onDeleteTrayectoService(trayecto : Trayecto):Observable<Trayecto>{
 const url = `${this.apiUrl}/${trayecto.id}`
return this.http.delete<Trayecto>(url) 
}
onEditTrayectoService(trayecto: Trayecto){
  const url = `${this.apiUrl}/${trayecto.id}`
 return this.http.put<Trayecto>(url,trayecto,httpOptions); 
}
}

