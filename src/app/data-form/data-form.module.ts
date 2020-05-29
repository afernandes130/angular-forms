import { UtilsModule } from './../utils/utils.module';
import { HttpClientModule } from '@angular/common/http';
import { DataFormComponent } from './data-form.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    DataFormComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    UtilsModule,
    HttpClientModule
  ]
})
export class DataFormModule { }
