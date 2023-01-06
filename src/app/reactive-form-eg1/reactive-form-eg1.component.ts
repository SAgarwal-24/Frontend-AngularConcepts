import { Component, OnInit } from '@angular/core';
import {FormArray, FormBuilder, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-reactive-form-eg1',
  templateUrl: './reactive-form-eg1.component.html',
  styleUrls: ['./reactive-form-eg1.component.css']
})
export class ReactiveFormEg1Component implements OnInit {

  testForm1: FormGroup;
  testForm2: FormGroup;

  constructor(private  formBuilder: FormBuilder) {

    this.testForm1 = this.formBuilder.group({
      username : '',
      skills: this.formBuilder.array([]),
    });

    this.testForm2 = this.formBuilder.group({
      username2 : '',
      skills2: this.formBuilder.array([]),
    });

  }

  get skills() : FormArray {
    console.log(" get skills() invoked ")
    return this.testForm1.get("skills") as FormArray
  }

  newSkills() : FormGroup {
    console.log(" newSkills() invoked ")
    return this.formBuilder.group({
      key:'',
      value:''
    })
  }

  addSkills() {
    console.log(" addSkills() invoked ")
    this.skills.push(this.newSkills());
  }
  /*
  addSkills() {

    const skillsFormArr = this.testForm1.controls?.['skills'] as FormArray;

    skillsFormArr.push( this.formBuilder.group({
      key:'',
      value:''
    }) );

    // console.log(skillsFormArr);
  } */


  //-----------------
  get skills2() : FormArray {
    console.log(" get skills() invoked ")
    return this.testForm2.get("skills2") as FormArray
  }

  newSkills2() : FormGroup {
    console.log(" newSkills() invoked ")
    return this.formBuilder.group({
      key2:'',
      value2:''
    })
  }

  addSkills2() {
    console.log(" addSkills() invoked ")
    this.skills2.push(this.newSkills2());
  }

  ngOnInit(): void {

  }



  onSubmit(){
      console.log(this.testForm1.value)
  }

}
