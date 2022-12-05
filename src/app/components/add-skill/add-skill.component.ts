import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Skill } from 'src/skill';

@Component({
  selector: 'app-add-skill',
  templateUrl: './add-skill.component.html',
  styleUrls: ['./add-skill.component.css']
})
export class AddSkillComponent implements OnInit {
@Output() onAddSkill: EventEmitter<Skill> = new EventEmitter();
  form : FormGroup;
  constructor(private formBuilder : FormBuilder) {
      this.form = this.formBuilder.group({
        nombre:['',Validators.required],
        nivel:['',Validators.required]
      })
   }

  ngOnInit(): void {
  }
  get nombre(){
    return this.form.get("lugar");
  }

  get nivel(){
    return this.form.get("nivel");
  }
  onSubmit(event: Event){
    event.preventDefault;
    if(this.form.valid){
      const {nivel,nombre} = this.form.value;
      const new_skill = {nivel,nombre};
      this.onAddSkill.emit(new_skill);
      this.form.reset;
    } else {
      this.form.markAllAsTouched();
    }
  }

}
