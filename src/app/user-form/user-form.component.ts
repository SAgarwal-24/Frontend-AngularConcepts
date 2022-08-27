import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validator, Validators} from "@angular/forms";

@Component({
  selector: 'app-user-form',  //selector of user form - which is going to instantiate this component
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent implements OnInit {

  myReactiveForm: FormGroup ;
  constructor(fb: FormBuilder) {

    //FormGroup and FormControl classes are building blocks of reactive forms
    this.myReactiveForm = new FormGroup({
      'username': new FormControl('sam'),
      'email': new FormControl('sam123@gmail.com'),
      'course': new FormControl(null)
    });
  }

  ngOnInit(): void {
    //setting up form and controls
    // this.myReactiveForm = this.fb.

    this.myReactiveForm = new FormGroup({
      'username': new FormControl('Ram Singh>', Validators.required),
      'email': new FormControl('Ram123@gmail.com' , [Validators.required, Validators.email]),
      'course': new FormControl('Angular', Validators.required)
    });
  }

  onSubmit() {
    console.log(this.myReactiveForm);
  }
}
