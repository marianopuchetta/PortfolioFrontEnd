import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Experiencia } from 'src/experiencia';
@Component({
  selector: 'app-add-experiencia',
  templateUrl: './add-experiencia.component.html',
  styleUrls: ['./add-experiencia.component.css']
})
export class AddExperienciaComponent implements OnInit {
@Output() onAddExperiencia: EventEmitter<Experiencia> = new EventEmitter();
  form: FormGroup;
  constructor(private formBuilder : FormBuilder) {
    this.form = this.formBuilder.group({
      empresa:['',[Validators.required]],
      puesto:['',[Validators.required]],
      desde: ['', [Validators.required, Validators.minLength(4), Validators.maxLength(4)]],
      hasta: ['', [Validators.required, Validators.minLength(4), Validators.maxLength(4)]]

    })
   }

  ngOnInit(): void {
  }
  get Empresa(){
    return this.form.get("empresa");
  }
   get Puesto(){
    return this.form.get("puesto");
  }
  get Desde() {
    return this.form.get("desde");
  }
  get Hasta() {
    return this.form.get("hasta");
  }

  onSubmit(event: Event){
    event.preventDefault;
    if(this.form.valid){
      const {empresa,puesto,desde,hasta} = this.form.value;
      const newExperiencia = {empresa,puesto,desde,hasta};
      this.onAddExperiencia.emit(newExperiencia);
      this.form.reset;
    } else {
      this.form.markAllAsTouched();
    }
  }

}
