import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';

import { FormComponent } from './form.component';
import { FormQuestionComponent } from './form-question/form-question.component';
import { QuestionService } from './form-question/questions/question.service';
import { UtilsModule } from '../utils/utils.module';

@NgModule({
  declarations: [
    FormComponent,
    FormQuestionComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    ReactiveFormsModule,
    UtilsModule
  ],
  exports:[
    FormComponent
  ],
  providers:[
    QuestionService
  ]
})
export class FormsView { }
