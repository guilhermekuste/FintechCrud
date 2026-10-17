import { Component, inject, OnInit } from '@angular/core';
import { ClienteService } from '../../services/cliente.service';
import { Cliente } from '../../model/cliente';

@Component({
  selector: 'app-admin-clientes',
  standalone: true,
  imports: [],
  templateUrl: './admin-clientes.component.html',
  styleUrl: './admin-clientes.component.css'
})
export class AdminClientesComponent implements OnInit {
  
private service = inject(ClienteService);
listaClientes:Cliente[] = [];

ngOnInit(): void {
  this.listaClientes = this.service.listar();
  
}

editar(id:number){}
excluir(id:number){}
}
