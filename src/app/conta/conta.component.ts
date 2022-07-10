import { ClienteService } from './../service/cliente.service';
import { Component, OnInit } from '@angular/core';
import { Cliente } from '../domain/cliente';

@Component({
  selector: 'app-conta',
  templateUrl: './conta.component.html',
  styleUrls: ['./conta.component.scss'],
})
export class ContaComponent implements OnInit {
  list: Cliente[] = [];

  constructor(private clienteservice: ClienteService) {}

  ngOnInit(): void {
    this.carregarTabela();
  }

  private carregarTabela(): void {
    this.clienteservice.consultar().subscribe((domains: Cliente[]) => {
      if (domains) {
        this.list = domains;
      }
    });
  }

  deletar(cliente: Cliente): void {
    alert('tem certeza que quer remover isso ? ');
    this.clienteservice.remover(cliente.id).subscribe((d: Cliente) => {
      if (d.id) {
        this.carregarTabela();
      }
    });
  }
}
