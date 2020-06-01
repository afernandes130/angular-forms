import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, tap, delay } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class ExemplosDatasourceService {

  constructor(private http: HttpClient) { }

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

    VerificaEmail(filter: string){
      return this.http.get("assets/dados/emails.json")
      .pipe(
        delay(3000),
        map((dados : {emails : any[]}) => dados.emails),
        tap(console.log),
        map((dados: {email: String}[]) => dados.filter(f => f.email === filter)),
        tap(console.log),
        map((dados : any[]) => dados.length > 0),
        tap(console.log)
      )}

}
