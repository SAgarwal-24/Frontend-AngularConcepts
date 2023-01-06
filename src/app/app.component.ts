import { Component } from '@angular/core';

@Component({  //to the class 'AppComponent' we have a meta-data attached in form of decorator ie - @Component decorator
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

// @Component decorator tells the Angular that 'AppComponent' is not a plain class - infact its a component
export class AppComponent {
  title = 'angular-dynamicForm-app';
  active = 7;
  constructor() {
    setTimeout(() => {
    }, 2000)
  }
}
