import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { ExperienciaService } from 'src/app/services/experiencia.service';
import { Experiencia } from 'src/experiencia';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-experiencia',
  templateUrl: './experiencia.component.html',
  styleUrls: ['./experiencia.component.css']
})
export class ExperienciaComponent implements OnInit {
  @Output() addExperienciaService: EventEmitter<Experiencia> = new EventEmitter();
  @Output() experiencia: EventEmitter<Experiencia> = new EventEmitter();
  @Output() onToggleAddExperiencia: EventEmitter<boolean> = new EventEmitter();
  @Output() onOpenEditExperiencia: EventEmitter<Experiencia> = new EventEmitter();
  @Output() editExperienciaService: EventEmitter<Experiencia> = new EventEmitter();
  experiencia_to_edit: any;
  isOpen = false;
  open_edit_experiencia_flag = false;
  experiencias: Experiencia[] = [];
  constructor(private experienciaService: ExperienciaService) { }

  ngOnInit(): void {
    this.experienciaService.getExperienciasService().subscribe(experiencias => {
      this.experiencias = experiencias;
    });
  }
  toggleAddExperiencia() {
    this.isOpen = !this.isOpen;
    this.onToggleAddExperiencia.emit(this.isOpen);
  }

  openEditExperiencia(experiencia: Experiencia) {
    this.open_edit_experiencia_flag = !this.open_edit_experiencia_flag;
    this.experienciaService.getExperienciaService(experiencia).subscribe((experiencia) => {
      this.experiencia_to_edit = experiencia;
    })
    return this.experiencia_to_edit;
  }

  onAddExperiencia(experiencia: Experiencia) {
    this.addExperienciaService.emit(experiencia);
    this.experienciaService.addExperienciaService(experiencia).subscribe((experiencia) => {
      this.isOpen = !this.isOpen;
      this.experiencias.push(experiencia);
    })
  }
  allExperiencias() {
    this.experienciaService.getExperienciasService().subscribe((experiencias) => {
      this.experiencias = experiencias;
    });
  }
  onEditExperiencia(experiencia: Experiencia) {
    this.editExperienciaService.emit(experiencia);
    this.experienciaService.editExperienciaService(experiencia).subscribe(() => {
          this.open_edit_experiencia_flag = !this.open_edit_experiencia_flag;
          this.allExperiencias();
    });
  }

}
