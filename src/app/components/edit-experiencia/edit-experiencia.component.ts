import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Experiencia } from 'src/experiencia';

@Component({
  selector: 'app-edit-experiencia',
  templateUrl: './edit-experiencia.component.html',
  styleUrls: ['./edit-experiencia.component.css']
})
export class EditExperienciaComponent implements OnInit {
  @Output() onEditExperiencia: EventEmitter<Experiencia> = new EventEmitter();
  @Input() experiencia_to_edit: any;
  form: FormGroup;
  constructor(private formBuilder: FormBuilder) {
    this.form = this.formBuilder.group({
      id: [''],
      lugar: ['', Validators.required],
      puesto: ['', Validators.required],
      desde: ['', [Validators.required, Validators.minLength(4), Validators.maxLength(4)]],
      hasta: ['', [Validators.required, Validators.minLength(4), Validators.maxLength(4)]]
    })
  }

  ngOnInit(): void {
  }
  get lugar() {
    return this.form.get("lugar");
  }
  get puesto() {
    return this.form.get("puesto");
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
      const { id, lugar, puesto, desde, hasta } = this.form.value;
      const newExperiencia = { id, lugar, puesto, desde, hasta };
      this.onEditExperiencia.emit(newExperiencia);
      this.form.reset;
    } else {
      this.form.markAllAsTouched();
    }
  }

}
