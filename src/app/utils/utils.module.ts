import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DebugFormComponent } from './debug-form/debug-form.component';
import { MessageErrorFormsComponent } from './message-error-forms/message-error-forms.component';
import { EstadosService } from './services/estados.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    DebugFormComponent,
    MessageErrorFormsComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    DebugFormComponent,
    MessageErrorFormsComponent,
    HttpClientModule
  ],
  providers: [EstadosService],
})
export class UtilsModule { }
