import { Component, OnInit } from '@angular/core';
import { Router, Event } from '@angular/router';
import { FormBuilder, FormGroup, FormArray, Validators } from '@angular/forms';


@Component({
  selector: 'app-portfolio-form',
  templateUrl: './portfolio-form.component.html',
  styleUrls: ['./portfolio-form.component.scss']
})
export class PortfolioFormComponent implements OnInit {
  reactiveforms: FormGroup;
  constructor(public router: Router, private fb: FormBuilder) { 
    
  }

  ngOnInit(): void {
    this.reactiveforms = this.fb.group({
      firstName: [],
      lastName: [],
      address : this.fb.group({
        city: [],
        state: [],
        pincode: []
      }),

      exp : this.fb.array([
        this.addexpFormGroup()
      ]),

      projects : this.fb.array([
        this.addProjectFormGroup()
      ]),

      education : this.fb.array([
        this.addEducationFormGroup()
      ]),

      skills : this.fb.array([
        this.addSkillFormGroup()
      ]),

      designation: [],
      email: [],
      linkedin: [],
      phone: [],
      introduction: []
    });
  }

  get exp(){
    return this.reactiveforms.get('exp') as FormArray;
  }

  get projects(){
    return this.reactiveforms.get('projects') as FormArray;
  }

  get education(){
    return this.reactiveforms.get('education') as FormArray;
  }

  get skills(){
    return this.reactiveforms.get('skills') as FormArray;
  }

  addexp(){
 //this.exp.push(this.fb.control(''));
    (<FormArray>this.reactiveforms.get('exp')).push(this.addexpFormGroup());
  }

  addProject(){
    (<FormArray>this.reactiveforms.get('projects')).push(this.addProjectFormGroup());
  }

  addEducation(){
    (<FormArray>this.reactiveforms.get('education')).push(this.addEducationFormGroup());
  }

  addSkills(){
    (<FormArray>this.reactiveforms.get('skills')).push(this.addSkillFormGroup());
  }

  getControls() {
    return (this.reactiveforms.get('exp') as FormArray).controls;
  }

  getProjectControls() {
    return (this.reactiveforms.get('projects') as FormArray).controls;
  }

  getEduControls() {
    return (this.reactiveforms.get('education') as FormArray).controls;
  }

  getSkillControls(){
    return (this.reactiveforms.get('skills') as FormArray).controls;
  }

  addProjectFormGroup(): FormGroup{
    return this.fb.group({
      projectTitle: ['', Validators.required],
      projectDuration: ['', Validators.required],
      keySkills: ['', Validators.required],
      responsibility: ['', Validators.required],
      role: ['', Validators.required],
      projectDescription: ['']
    });
     }

  addexpFormGroup(): FormGroup{
    return this.fb.group({
      companyNames: ['', Validators.required],
      experienceinyrs: ['', Validators.required],
      proficiency: ['', Validators.required],
      descriptiondetails: ['']
    });
    //this.exp.push(this.fb.control(''));
     }


  addEducationFormGroup() : FormGroup{
      return this.fb.group({
        degree: ['', Validators.required],
        stream: ['', Validators.required],
        university: ['', Validators.required],
        duration: ['', Validators.required],
      });
       }

  addSkillFormGroup(): FormGroup{
      return this.fb.group({
        technology: ['', Validators.required],
        rate: ['', Validators.required],
      });
       }

  removeexp(index: number){
    this.exp.removeAt(index);
  }

  removeproject(index: number){
    this.projects.removeAt(index);
  }

  removeEdu(index: number){
    this.education.removeAt(index);
  }

  removeskill(index: number){
    this.skills.removeAt(index);
  }

submithandler(){
  console.log(this.reactiveforms.value);
  sessionStorage.setItem('resume', JSON.stringify(this.reactiveforms.value));
  this.router.navigate(['/']);
}
}
