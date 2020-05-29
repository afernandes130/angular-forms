import { NgModule } from '@angular/core';

import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TemplateFormComponent } from './template-form.component';
import { HttpClientModule } from '@angular/common/http';
import { UtilsModule } from './../utils/utils.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    UtilsModule
  ],
  exports: [],
  declarations: [
    TemplateFormComponent,
  ],
  providers: [],
})
export class TemplateFormModule { }


