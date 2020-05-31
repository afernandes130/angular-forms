import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ExemplosDatasourceService {

  constructor() { }

    getTecnologias(){
      return [
        {nome: 'java', descricao: "Java Script"},
        {nome: 'react', descricao: "React Native"},
        {nome: 'python', descricao: "Phynton"},
        {nome: 'sqlserver', descricao: "Microsoft SQL"},
        {nome: 'csharp', descricao: "C#"},
      ]
    }

    getNewsLetters(){
      return [
        {nome: 'sim', descricao: "Sim"},
        {nome: 'nao', descricao: "Não"},
      ]
    }
}
