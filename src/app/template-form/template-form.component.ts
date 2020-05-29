import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { error } from 'protractor';
import { log } from 'util';
import { from } from 'rxjs';


@Component({
  selector: 'app-template-form',
  templateUrl: './template-form.component.html',
  styleUrls: ['./template-form.component.css']
})
export class TemplateFormComponent implements OnInit {

  user : any = {
    email: '',
    nome: '',
    endereco : {
      cep: '',
      numero: '',
      complemento: '',
      rua: '',
      bairro: '',
      cidade: '',
      estado: '',
    },
  }

  onSubmit(form){
    console.log(form);
  }

  aplicaCssErro(input){
    return {
      'is-invalid' : input.invalid && input.touched
    }
  }

  BuscaCEP(cep, form){

    this.LimpaFormulario(form);
    //Nova variável "cep" somente com dígitos.
    cep = cep.replace(/\D/g, '');

     //Verifica se campo cep possui valor informado.
     if (cep != "") {
       //Expressão regular para validar o CEP.
       const validacep = /^[0-9]{8}$/;
       if(validacep.test(cep)) {
         this._httpclient.get(`https://viacep.com.br/ws/${cep}/json/`)
         .subscribe(resp=> this.PreencheFormulario(resp, form));
       }
       else {
         //cep é inválido.
         this.user.endereco.cep = ''
         alert("Formato de CEP inválido.");
       }
     }
  }

  PreencheFormulario(dados, formulario){
    formulario.form.patchValue({
      endereco : {
        rua: dados.logradouro,
        bairro: dados.bairro,
        cidade: dados.localidade,
        estado: dados.uf,
      }
    })
  }

  
  LimpaFormulario(formulario){
    formulario.form.patchValue({
      endereco : {
        rua: null,
        bairro: null,
        cidade: null,
        estado: null,
      }
    })
  }

  constructor(private _httpclient : HttpClient) { }

  ngOnInit(): void {
  }

}
