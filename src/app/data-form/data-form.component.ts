import { ExemplosDatasourceService } from './../utils/services/exemplos/exemplos-datasource.service';
import { CepsService } from './../utils/services/cep/ceps.service';
import { Estados } from './../utils/models/estados';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormArray, FormControl } from '@angular/forms';
import { EstadosService } from '../utils/services/estados/estados.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-data-form',
  templateUrl: './data-form.component.html',
  styleUrls: ['./data-form.component.css']
})
export class DataFormComponent implements OnInit {
  
  formulario : FormGroup;
  estados: Observable<Estados[]>;
  tecnologias : any;
  newsletters : any;
  frameworksarr : any = ['Angular', 'React', 'Vue', '.NetCore'];
  teste2 : FormArray;

  constructor(
      private formbuilder : FormBuilder,
      private http: HttpClient,
      private estadosserv : EstadosService,
      private cepserv : CepsService,
      private exemplosserv : ExemplosDatasourceService
  ) { }

  ngOnInit(): void {
    this.formulario = this.formbuilder.group({
      nome: [null, [Validators.required]],
      email: [null, [Validators.required, Validators.email]],
      endereco: this.formbuilder.group({
        cep:  [null, [Validators.required]],
        numero:  [null, [Validators.required]],
        complemento: [null],
        rua:  [null, [Validators.required]],
        bairro:  [null, [Validators.required]],
        cidade:  [null, [Validators.required]],
        estado:  [null, [Validators.required]],
      }),
      tecnologias: [null],
      newsletters: ['sim'],
      termsuse: [null, Validators.pattern('true')],
      frameworks: this.biuldFramework()
    })

    this.estados = this.estadosserv.get()
    this.tecnologias = this.exemplosserv.getTecnologias();
    this.newsletters = this.exemplosserv.getNewsLetters();
   }

  biuldFramework(){
    const values = this.frameworksarr.map(v => new FormControl(false));
    return this.formbuilder.array(values);
  }

  get frameworks(): FormArray {
    return this.formulario.get('frameworks') as FormArray;
  }

  ShowConsole(){
      const teste = ''
      console.log(teste)
    }

  onSubmit(){
    if (this.formulario.valid) {
      this.http.post('https://httpbin.org/post', JSON.stringify(this.formulario.value))
      .subscribe(resp =>{
        console.log(resp)
        this.resetForm();
      } )  
    }
    else {
      console.log("invalido");
      this.ShowValidation(this.formulario)
      
    }
  }

  ShowValidation(fromgroup : FormGroup){
      Object.keys(fromgroup.controls).forEach(campo => {
        const controle = fromgroup.get(campo)
        if (controle.invalid) {
            controle.markAsDirty() 

        }
        if(controle instanceof FormGroup){
          this.ShowValidation(controle)
        }
      })
  }

  resetForm(){
    this.formulario.reset();
  }

  aplicaCssErro(input : string){
    const control = this.formulario.get(input)
    return {
      'is-invalid' : control.invalid && (control.touched || control.dirty)
    }
  }

  BuscaCEP(){
    this.LimpaFormulario();
    let cep = this.formulario.get('endereco.cep').value;
    this.cepserv.Get(cep).subscribe(resp=> this.PreencheFormulario(resp));
  }

  PreencheFormulario(dados){
    this.formulario.patchValue({
      endereco : {
        rua: dados.logradouro,
        bairro: dados.bairro,
        cidade: dados.localidade,
        estado: dados.uf,
      }
    })
  }

  
  LimpaFormulario(){
    this.formulario.patchValue({
      endereco : {
        rua: null,
        bairro: null,
        cidade: null,
        estado: null,
      }
    })
  }

  setTecnologias(){
    this.formulario.patchValue({
      tecnologias : [
        "java",
        "react"
      ]
    })
  }

}
