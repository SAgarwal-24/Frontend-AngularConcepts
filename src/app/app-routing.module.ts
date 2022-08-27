import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {TemplateDrivenFormComponent} from "./template-driven-form/template-driven-form.component";
import {UserFormComponent} from "./user-form/user-form.component";

const routes: Routes = [
  {path: 'templateDrivenForms', component: TemplateDrivenFormComponent},
  {path: 'userFormComponent' , component : UserFormComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})


export class AppRoutingModule { }
export const routingComponentsArr = [UserFormComponent, TemplateDrivenFormComponent]
