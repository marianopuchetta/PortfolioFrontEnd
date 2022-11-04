import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-add-trayecto',
  templateUrl: './add-trayecto.component.html',
  styleUrls: ['./add-trayecto.component.css']
})
export class AddTrayectoComponent implements OnInit {
  form: FormGroup;
  constructor(private formBuilder: FormBuilder) {

    this.form = this.formBuilder.group({
      institucion: [''],
      titulo: [''],
      desde:[''],
      hasta:['']
    })
  }
  

  ngOnInit(): void {
  }
  onAddTrayecto(event : Event){
console.log('click')
  }
}
