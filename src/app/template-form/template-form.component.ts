import { CepsService } from './../utils/services/cep/ceps.service';
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
    this._cepserv.Get(cep).subscribe(resp=> this.PreencheFormulario(resp, form));
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

  constructor(
    private _httpclient : HttpClient,
    private _cepserv : CepsService
    ) { }

  ngOnInit(): void {
  }

}
