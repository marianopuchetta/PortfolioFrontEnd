import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { SkillService } from 'src/app/services/skill.service';
import { Skill } from 'src/skill';

@Component({
  selector: 'app-skill',
  templateUrl: './skill.component.html',
  styleUrls: ['./skill.component.css']
})
export class SkillComponent implements OnInit {
  @Output() onOpenAddSkill: EventEmitter<boolean> = new EventEmitter();
  @Output() onOpenEditSkill: EventEmitter<boolean> = new EventEmitter();
  @Output() addSkillService: EventEmitter<Skill> = new EventEmitter();
  @Output() skil: EventEmitter<Skill> = new EventEmitter();
  @Output() editSkillService: EventEmitter<Skill> = new EventEmitter();
  @Output() deleteSkillService: EventEmitter<Skill> = new EventEmitter();
  skill_to_edit: any;
  open_add_skill_flag = false;
  open_edit_skill_flag = false;
  skills: Skill[] = [];

  constructor(private skillService: SkillService,public authService: AuthService) { }

  ngOnInit(): void {
    this.skillService.getSkillsService().subscribe(skills => {
      this.skills = skills;
    })
  }
  openAddSkill() {
    this.open_add_skill_flag = !this.open_add_skill_flag;
    this.open_edit_skill_flag = false;
    this.onOpenAddSkill.emit(this.open_add_skill_flag);
  }
  openEditSkill(skill: Skill) {
    this.open_edit_skill_flag = !this.open_edit_skill_flag;
    this.open_add_skill_flag = false;
    this.skillService.getSkillService(skill).subscribe(skill => {
      this.skill_to_edit = skill;
    })
    this.onOpenEditSkill.emit(this.open_edit_skill_flag);
    return this.skill_to_edit;
  }
  onAddSkill(skill: Skill) {
    this.addSkillService.emit(skill);
    this.skillService.addSkillService(skill).subscribe((skill) => {
      this.open_add_skill_flag = !this.open_add_skill_flag;
      this.skills.push(skill);
    })
  }

  allSkills(){
    this.skillService.getSkillsService().subscribe((skills) => {
      this.skills = skills;
    })
  }
  onEditSkill(skill: Skill) {
    this.editSkillService.emit(skill);
    this.skillService.editSkillService(skill).subscribe(() => {
      this.open_edit_skill_flag = !this.open_edit_skill_flag;
      this.allSkills();
    })
  }
  onDeleteSkill(skill: Skill){
    this.deleteSkillService.emit(skill);
    this.skillService.deleteSkillService(skill).subscribe(() => {
this.skills = this.skills.filter((s) => {
  return s.id !== skill.id;
})
    })

  }

}
