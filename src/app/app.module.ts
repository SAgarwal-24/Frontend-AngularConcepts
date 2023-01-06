import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule, routingComponentsArr } from './app-routing.module'; //Import 'AppRoutingModule' in 'app.module.ts' and routing components array
import { AppComponent } from './app.component';

import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {CommonModule} from "@angular/common";
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {UserFormComponent} from "./user-form/user-form.component";
import { PipeExampleComponent } from './pipe-example/pipe-example.component';
import { CustomPipeExamplePipe } from './custom-pipe-example.pipe';
import { CommunicationComponent } from './communication/communication.component';
import { ParentComponent } from './communication/parent/parent.component';
import { ChildComponent } from './communication/child/child.component';
import { Communication2Component } from './communication2/communication2.component';
import { ReactiveFormEg1Component } from './reactive-form-eg1/reactive-form-eg1.component';
import { PostmanPlatformComponent } from './postman-platform/postman-platform.component';
import { TypeaheadExampleComponent } from './typeahead-example/typeahead-example.component';
import { DragulaModule } from 'ng2-dragula';

@NgModule({
  declarations: [
    AppComponent,
    routingComponentsArr,
    UserFormComponent,
    PipeExampleComponent,
    CustomPipeExamplePipe,
    CommunicationComponent,
    ParentComponent,
    ChildComponent,
    Communication2Component,
    ReactiveFormEg1Component,
    PostmanPlatformComponent,
    TypeaheadExampleComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    CommonModule,
    ReactiveFormsModule, //gives access to bunch of different classes and directives which are necessary to build reactive forms
    AppRoutingModule,
    NgbModule ,//add 'AppRoutingModule' to  imports[] array  - so that it is part of -> 'angular-dynamicForm-application'
    DragulaModule.forRoot()
  ],
  providers: [],       //Any service is registered here - so that Angular injector knows about it and can inject wherever needed
  bootstrap: [AppComponent]
})
export class AppModule { }
