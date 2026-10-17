import { Injectable } from '@angular/core';
import { Cliente } from '../model/cliente';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  constructor() { }

  listar():Cliente[]{
    return [
{id:1, cpf: "12345678910",nome:"Ana", sobrenome:"Silva", dataNascimento:"2005-01-01", email:"ana@gmail.com"},
{id:2, cpf:"10987654321", nome:"Carlos", sobrenome:"Santos", dataNascimento:"2001-01-10", email:"carlos@gmail.com"}
    ];
  }
}
