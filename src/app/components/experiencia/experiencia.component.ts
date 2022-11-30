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
 @Output() addExperienciaService: EventEmitter<Experiencia> = new EventEmitter();
 @Output() experiencia: EventEmitter<Experiencia> = new EventEmitter();
 @Output() onToggle_add_experiencia: EventEmitter<boolean> = new EventEmitter();

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
  toggle_add_experiencia() {
    this.isOpen = !this.isOpen;
    this.onToggle_add_experiencia.emit(this.isOpen);
  } 
  onAddExperiencia(experiencia : Experiencia){
    this.addExperienciaService.emit(experiencia);
    this.experienciaService.addExperienciaService(experiencia).subscribe((experiencia)=>{
      this.isOpen = !this.isOpen;
      this.experiencias.push(experiencia);
    })
  }
  allExperiencias(){
    this.experienciaService.get_experiencias().subscribe((trayectos) => {
      this.experiencias = trayectos;
    });
  }
}
