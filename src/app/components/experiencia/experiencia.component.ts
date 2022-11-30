import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { ExperienciaService } from 'src/app/services/experiencia.service';
import { Experiencia } from 'src/experiencia';
import { Observable} from 'rxjs';
@Component({
  selector: 'app-experiencia',
  templateUrl: './experiencia.component.html',
  styleUrls: ['./experiencia.component.css']
})
export class ExperienciaComponent implements OnInit {
 
  experiencia_to_edit : any;
  isOpen = false;
  open_edit_flag = false;
  experiencias: Experiencia[] = [];
  constructor(private experienciaService: ExperienciaService) { }

  ngOnInit(): void {
    this.experienciaService.get_experiencias().subscribe(experiencias =>{
     this.experiencias = experiencias;
    });
  }
  allExperiencias(){
    this.experienciaService.get_experiencias().subscribe((trayectos) => {
      this.experiencias = trayectos;
    });
  }
}
