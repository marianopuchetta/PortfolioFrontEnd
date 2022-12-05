import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Skill } from 'src/skill';

const httpOptions = {
  headers : new HttpHeaders({
    'Content-Type' : 'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})
export class SkillService {

  private apiUrl = 'http://localhost:5000/skills'

  constructor(private http:HttpClient) { }

  getSkillsService(): Observable<Skill[]>{
    return this.http.get<Skill[]>(this.apiUrl)
  }
  getSkillService(skill: Skill){
    const url = `${this.apiUrl}/${skill.id}`;
    return this.http.get<Skill>(url);
  }
  addSkillService(skill:Skill): Observable<Skill>{
    return this.http.post<Skill>(this.apiUrl,skill,httpOptions);
  }
  editSkillService(skill: Skill): Observable<Skill>{
    const url = `${this.apiUrl}/${skill.id}`;
    return this.http.put<Skill>(url,skill,httpOptions);
  }
  deleteSkillService(skill: Skill): Observable<Skill>{
    const url = `${this.apiUrl}/${skill.id}`;
    return this.http.delete<Skill>(url);
  }
}
