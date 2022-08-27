import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule, routingComponentsArr } from './app-routing.module'; //Import 'AppRoutingModule' in 'app.module.ts' and routing components array
import { AppComponent } from './app.component';

import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {CommonModule} from "@angular/common";
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {UserFormComponent} from "./user-form/user-form.component";

@NgModule({
  declarations: [
    AppComponent,
    routingComponentsArr,
    UserFormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    CommonModule,
    ReactiveFormsModule, //gives access to bunch of different classes and directives which are necessary to build reactive forms
    AppRoutingModule, NgbModule //add 'AppRoutingModule' to  imports[] array  - so that it is part of -> 'angular-dynamicForm-application'
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
