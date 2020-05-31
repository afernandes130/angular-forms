import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Estados } from './../../models/estados';

@Injectable({
  providedIn: 'root'
})
export class EstadosService {

  url: string =  'https://servicodados.ibge.gov.br/api/v1/localidades/estados?orderBy=nome'

  constructor(private http : HttpClient) { }

  get(){
    return this.http.get<Estados[]>(this.url)
  }
}
