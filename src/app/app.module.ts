import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AngularBasicsComponent } from './angular-basics/angular-basics.component';
import { FormsModule } from '@angular/forms';
import { AngularDirectivesComponent } from './angular-directives/angular-directives.component';

@NgModule({
  declarations: [
    AppComponent,
    AngularBasicsComponent,
    AngularDirectivesComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
