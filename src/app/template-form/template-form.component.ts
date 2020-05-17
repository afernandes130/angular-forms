import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-template-form',
  templateUrl: './template-form.component.html',
  styleUrls: ['./template-form.component.css']
})
export class TemplateFormComponent implements OnInit {

  user : any = {
    email: '',
    nome: '',
    cep: '',
    numero: '',
    complemento: '',
  }

  onSubmit(form){
    console.log(form);
  }

  aplicaCssErro(input){
    return {
      'is-invalid' : input.invalid && input.touched
    }
  }

  constructor() { }

  ngOnInit(): void {
  }

}
