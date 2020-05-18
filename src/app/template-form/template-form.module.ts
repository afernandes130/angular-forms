import { NgModule } from '@angular/core';

import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TemplateFormComponent } from './template-form.component';
import { DebugFormComponent } from './../debug-form/debug-form.component';
import { MessageErrorFormsComponent } from '../utils/message-error-forms/message-error-forms.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule
  ],
  exports: [],
  declarations: [
    TemplateFormComponent,
    DebugFormComponent,
    MessageErrorFormsComponent
  ],
  providers: [],
})
export class TemplateFormModule { }


