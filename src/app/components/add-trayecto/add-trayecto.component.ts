import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Trayecto } from 'src/trayecto';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-add-trayecto',
  templateUrl: './add-trayecto.component.html',
  styleUrls: ['./add-trayecto.component.css']
})
export class AddTrayectoComponent implements OnInit {
  @Output() onAddTrayecto: EventEmitter<Trayecto> = new EventEmitter();

  form: FormGroup;
  constructor(private formBuilder: FormBuilder) {

    this.form = this.formBuilder.group({
      institucion: ['', [Validators.required]],
      titulo: ['', [Validators.required]],
      desde: ['', [Validators.required, Validators.minLength(4), Validators.maxLength(4)]],
      hasta: ['', [Validators.required, Validators.minLength(4), Validators.maxLength(4)]]
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
  onSubmit(event: Event) {
    event.preventDefault;
    if (this.form.valid) {
      const { institucion, titulo, desde, hasta } = this.form.value;
      const newTrayecto = { institucion, titulo, desde, hasta };
      this.onAddTrayecto.emit(newTrayecto);
      console.log('click');
      this.form.reset();
    } else {
      this.form.markAllAsTouched();
    }

  }
}
