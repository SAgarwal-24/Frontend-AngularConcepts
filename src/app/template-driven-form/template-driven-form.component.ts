import { Component, OnInit } from '@angular/core';
import {User} from "../user";

@Component({
  selector: 'app-template-driven-form',
  templateUrl: './template-driven-form.component.html',
  styleUrls: ['./template-driven-form.component.css']
})
export class TemplateDrivenFormComponent implements OnInit {


  topics = ['Angular', 'React', 'Vue'];
  userModel = new User('Shubham', "Shubham@test.com", 9898989899, 'default', 'evening', true);

  topicHasError = true;

  validateTopic(value: any){
    if(value === 'default'){
      this.topicHasError = true;
    }
    else{
      this.topicHasError = false;
    }
  }

  constructor() { }

  ngOnInit(): void {
  }

}
