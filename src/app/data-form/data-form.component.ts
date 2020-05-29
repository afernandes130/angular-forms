import { Estados } from './../utils/models/estados';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { EstadosService } from '../utils/services/estados.service';

@Component({
  selector: 'app-data-form',
  templateUrl: './data-form.component.html',
  styleUrls: ['./data-form.component.css']
})
export class DataFormComponent implements OnInit {
  
  formulario : FormGroup;
  estados : Estados[];

  constructor(
      private formbuilder : FormBuilder,
      private http: HttpClient,
      private estadosserv : EstadosService
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
      })  
    })

    this.estadosserv.get()
    .subscribe(res => 
        {this.estados = res;
        console.log(this.estados[0].nome)}
      )
    console.log("aqui");
    
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
        console.log(controle)
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
    cep = cep.replace(/\D/g, '');
     if (cep != "") {
       //Expressão regular para validar o CEP.
       const validacep = /^[0-9]{8}$/;
       if(validacep.test(cep)) {
        
         this.http.get(`https://viacep.com.br/ws/${cep}/json/`)
         .subscribe(resp=> this.PreencheFormulario(resp));
       }
       else {
         //cep é inválido.
         alert("Formato de CEP inválido.");
       }
     }
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

}
