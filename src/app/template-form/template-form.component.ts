import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { error } from 'protractor';


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

  BuscaCEP(cep){
    //Nova variável "cep" somente com dígitos.
    cep = cep.replace(/\D/g, '');

     //Verifica se campo cep possui valor informado.
     if (cep != "") {
       //Expressão regular para validar o CEP.
       const validacep = /^[0-9]{8}$/;
       if(validacep.test(cep)) {
         this._httpclient.get(`https://viacep.com.br/ws/${cep}/json/`)
         .subscribe(
            resp => {
              this.user.endereco.rua = resp['logradouro']
              this.user.endereco.bairro = resp['bairro']
              this.user.endereco.cidade = resp['localidade']
              this.user.endereco.estado = resp['uf']
              console.log(resp)},
            error => {console.log(error)}
         );
       }
       else {
         //cep é inválido.
         this.user.endereco.cep = ''
         alert("Formato de CEP inválido.");
       }

     }

  }

  constructor(private _httpclient : HttpClient) { }

  ngOnInit(): void {
  }

}
