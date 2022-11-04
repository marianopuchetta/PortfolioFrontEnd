import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { Trayecto } from 'src/trayecto';



@Component({
  selector: 'app-trayectoria-educativa',
  templateUrl: './trayectoria-educativa.component.html',
  styleUrls: ['./trayectoria-educativa.component.css']
})
export class TrayectoriaEducativaComponent implements OnInit {
  @Output() onDeleteTrayectoService: EventEmitter<Trayecto> = new EventEmitter();
  @Output() onEditTrayectoService: EventEmitter<Trayecto> = new EventEmitter();
  all_data: any;
  trayectos: Trayecto[] = [];

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.dataService.get_trayectos().subscribe((trayectos) => {
      this.trayectos = trayectos
    });
  }
  onAddTrayecto() {
    console.log('click add_trayecto');
  }
  onDeleteTrayecto(trayecto: Trayecto) {
    this.onDeleteTrayectoService.emit(trayecto);
    this.dataService.onDeleteTrayectoService(trayecto)
      .subscribe(
        () => {
          this.trayectos = this.trayectos.filter(t => {
            console.log('click')
            return t.id !== trayecto.id
          })
        })
  }
  onEditTrayecto(trayecto: Trayecto) {
    this.dataService.onEditTrayectoService(trayecto).subscribe();
  }
}
