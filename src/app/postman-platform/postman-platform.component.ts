import { Component, OnInit } from '@angular/core';
import {FormArray, FormBuilder, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-postman-platform',
  templateUrl: './postman-platform.component.html',
  styleUrls: ['./postman-platform.component.css']
})
export class PostmanPlatformComponent implements OnInit {

  active = 1;
  apiForm: FormGroup;

  constructor(private  fb: FormBuilder) {

    this.apiForm = this.fb.group({

      paramsForm : this.fb.group({
        queryParams: this.fb.array([]),
      }),

      headersForm : this.fb.group({
        headersInfo: this.fb.array([]),
      }),

      bodyForm : this.fb.group({
        headersInfo: '',
        bodyDataType: ''
      })

    });

  }

  ngOnInit(): void {
  }

  /*
  myFormArray() {
    return this.apiForm.controls['paramsForm'].get('queryParams') as FormArray;
  } */

  get queryParamsFormArr() : FormArray {
    console.log(" get queryParamsFormArr() invoked ")
    return this.apiForm.get("paramsForm")?.get("queryParams") as FormArray
  }

  get headersFormArr() : FormArray {
    console.log(" get headersFormFormArr() invoked ")
    return this.apiForm.get("headersForm")?.get("headersInfo") as FormArray
  }

  newQueryParams() : FormGroup {
    console.log(" newQueryParams() invoked ")
    return this.fb.group({
      key:'',
      value:''
    })
  }

  newHeader() : FormGroup {
    console.log(" newHeader() invoked ")
    return this.fb.group({
      key:'',
      value:''
    })
  }

  addQueryParams() {
    console.log(" addSkills() invoked ")
    this.queryParamsFormArr.push(this.newQueryParams());
  }

  addNewHeader() {
    console.log(" addNewHeader() invoked ")
    this.headersFormArr.push(this.newHeader());
  }

  onSubmit(){
    console.log(this.apiForm.value)
  }

}
