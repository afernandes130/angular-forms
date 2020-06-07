import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DebugFormComponent } from './debug-form/debug-form.component';
import { MessageErrorFormsComponent } from './message-error-forms/message-error-forms.component';
import { HttpClientModule } from '@angular/common/http';
import { ErrorsMessagesComponent } from './errors-messages/errors-messages.component';

@NgModule({
  declarations: [
    DebugFormComponent,
    MessageErrorFormsComponent,
    ErrorsMessagesComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    DebugFormComponent,
    MessageErrorFormsComponent,
    HttpClientModule,
    ErrorsMessagesComponent
  ],
  providers: [],
})
export class UtilsModule { }
