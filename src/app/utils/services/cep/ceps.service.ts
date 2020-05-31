import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CepsService {

  constructor(private http : HttpClient) { }

  Get(cep){
    cep = cep.replace(/\D/g, '');
     if (cep !== "" || cep != null ) {
       const validacao = /^[0-9]{8}$/;
       let url = `https://viacep.com.br/ws/${cep}/json/`;

       if(validacao.test(cep)) {
         return this.http.get(url)
       }
       else{
         return of({})
       }
     }
  }


}
