import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AngularBasicsComponent } from './angular-basics/angular-basics.component';
import { FormsModule } from '@angular/forms';
import { AngularDirectivesComponent } from './angular-directives/angular-directives.component';
import { AngularComponentsAndDatabindingComponent } from './angular-components-and-databinding/angular-components-and-databinding.component';
import { AngularFormsComponent } from './angular-forms/angular-forms.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AngularReactiveFormComponent } from './angular-forms/angular-reactive-form/angular-reactive-form.component';


@NgModule({
  declarations: [
    AppComponent,
    AngularBasicsComponent,
    AngularDirectivesComponent,
    AngularComponentsAndDatabindingComponent,
    AngularFormsComponent,
    AngularReactiveFormComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
