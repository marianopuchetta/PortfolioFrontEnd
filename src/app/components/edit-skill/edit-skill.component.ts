import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Form, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Skill } from 'src/skill';

@Component({
  selector: 'app-edit-skill',
  templateUrl: './edit-skill.component.html',
  styleUrls: ['./edit-skill.component.css']
})
export class EditSkillComponent implements OnInit {
  @Output() onEditSkill: EventEmitter<Skill> = new EventEmitter();
  @Input() skill_to_edit: any;
form: FormGroup;

  constructor(private formBuilder: FormBuilder) { 
    this.form = this.formBuilder.group({
      id:[''],
      nombre:['',Validators.required],
      nivel: ['',Validators.required]
    })
  }


  ngOnInit(): void {
  }
  get id(){
    return this.form.get("id");
  }
  get nombre(){
    return this.form.get('nombre');
  }
  get nivel(){
    return this.form.get('nivel');
  }

  onSubmit(event : Event){
    event.preventDefault;
    if (this.form.valid) {
      const {id, nombre, nivel} = this.form.value;
      const skill_edited =  {id, nombre, nivel};
      this.onEditSkill.emit(skill_edited);
      this.form.reset;
    } else {
      this.form.markAllAsTouched();
    }
  }
}
