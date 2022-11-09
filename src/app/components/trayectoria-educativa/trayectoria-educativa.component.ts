import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { Trayecto } from 'src/trayecto';
import { Observable} from 'rxjs';




@Component({
  selector: 'app-trayectoria-educativa',
  templateUrl: './trayectoria-educativa.component.html',
  styleUrls: ['./trayectoria-educativa.component.css']
})
export class TrayectoriaEducativaComponent implements OnInit {
  @Output() addTrayectoService: EventEmitter<Trayecto> = new EventEmitter();
  @Output() onDeleteTrayectoService: EventEmitter<Trayecto> = new EventEmitter();
  @Output() onEditTrayectoService: EventEmitter<Trayecto> = new EventEmitter();
  @Output() onEditTrayecto: EventEmitter<Trayecto> = new EventEmitter();
  @Output() onToggle: EventEmitter<boolean> = new EventEmitter();
  @Output() on_open_edit: EventEmitter<boolean> = new EventEmitter();
  @Output() trayecto: EventEmitter<Trayecto> = new EventEmitter();
  trayecto_to_edit : any;
  isOpen = false;
  open_edit_flag = false;
  trayectos: Trayecto[] = [];
  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.dataService.get_trayectos().subscribe((trayectos) => {
      this.trayectos = trayectos;

    });

  }
  toggle() {
    this.isOpen = !this.isOpen;
    this.onToggle.emit(this.isOpen);
  } 
   open_edit(trayecto : Trayecto) :Observable<Trayecto>{
    this.open_edit_flag = !this.open_edit_flag;
    this.dataService.get_trayecto(trayecto).subscribe((trayecto) => {
      this.trayecto_to_edit = trayecto;
    })
    this.on_open_edit.emit(this.open_edit_flag);
    return this.trayecto_to_edit;
  }
 
  onDeleteTrayecto(trayecto: Trayecto) {
    this.onDeleteTrayectoService.emit(trayecto);
    this.dataService.onDeleteTrayectoService(trayecto)
      .subscribe(
        () => {
          this.trayectos = this.trayectos.filter(t => {
            return t.id !== trayecto.id
          })
        })
  }
 
  onAddTrayecto(trayecto: Trayecto) {
    this.addTrayectoService.emit(trayecto);
    this.dataService.addTrayectoService(trayecto).subscribe((trayecto) => {
      this.trayectos.push(trayecto);
     
    })
  }
}
