import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { Trayecto } from 'src/trayecto';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-edit-trayecto',
  templateUrl: './edit-trayecto.component.html',
  styleUrls: ['./edit-trayecto.component.css']
})
export class EditTrayectoComponent implements OnInit {
  @Input() trayecto_to_edit: any;
  @Output() onEditTrayecto: EventEmitter<Trayecto> = new EventEmitter();
  
  form: FormGroup;
  constructor(private formBuilder: FormBuilder) {

    this.form = this.formBuilder.group({
      institucion: ['', [Validators.required]],
      titulo: ['', [Validators.required]],
      desde: ['', [Validators.required, Validators.minLength(4), Validators.maxLength(4)]],
      hasta: ['', [Validators.required, Validators.minLength(4), Validators.maxLength(4)]],
      id:['']
    })
  }


  ngOnInit(): void {
  }

  get Institucion() {
    return this.form.get("institucion");
  }
  get Titulo() {
    return this.form.get("titulo");
  }
  get Desde() {
    return this.form.get("desde");
  }
  get Hasta() {
    return this.form.get("hasta");
  }
  get Id() {
    return this.form.get('id');
  }
  
  onSubmit(event: Event) {
    event.preventDefault;
    if (this.form.valid) {
      const { id,institucion, titulo, desde, hasta } = this.form.value;
      const newTrayecto = { id,institucion, titulo, desde, hasta };
      this.onEditTrayecto.emit(newTrayecto);
      this.form.reset();
    } else {
      this.form.markAllAsTouched();
    }

  }
}
