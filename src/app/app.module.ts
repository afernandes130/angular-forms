import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TemplateFormModule } from './template-form/template-form.module';
import { DataFormModule } from './data-form/data-form.module';
import { FormOrbComponent } from './form-orb/form-orb.component';
 import { FormsView } from './forms/forms-view.module';

@NgModule({
  declarations: [
    AppComponent,
    FormOrbComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    TemplateFormModule,
    DataFormModule,
    FormsView,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
