import { ContaBanco } from './../domain/conta-banco';
import { ContaBancoService } from './../service/conta-banco.service';
import { ClienteService } from './../service/cliente.service';
import { Cliente } from './../domain/cliente';
import { Component, Input, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ClienteModel } from '../model/cliente-model';
import { Observable } from 'rxjs';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { validateHorizontalPosition } from '@angular/cdk/overlay';

@Component({
  selector: 'app-contabanco',
  templateUrl: './contabanco.component.html',
  styleUrls: ['./contabanco.component.scss'],
})
export class ContabancoComponent implements OnInit {
  cliente: Cliente[] = [];
  contabanco: ContaBanco[] = [];
  form: FormGroup = this.formBuilder.group({
    idCliente: new FormControl('', [Validators.required]),
  });
  constructor(
    private clienteservice: ClienteService,
    private contabancoservice: ContaBancoService,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit(): void {
    this.carregarTabela();
    this.consultarClientes();
  }

  private carregarTabela(): void {
    this.clienteservice.consultar().subscribe((domains: Cliente[]) => {
      if (domains) {
        this.cliente = domains;
      }
    });
  }
  private consultarClientes(): void {
    this.contabancoservice.consultar().subscribe((x) => {
      this.contabanco = x;
    });
  }

  cadastrar(): void {
    if (this.form.valid) {
      const idCliente = this.form.controls['idCliente'].value;
      this.contabancoservice.cadastrar(idCliente).subscribe(() => {
        this.consultarClientes();
      });
    }
  }
  excluir(id: string): void {
    alert('tem certeza que quer excluir?');
    this.contabancoservice.remover(id).subscribe(() => {
      this.consultarClientes();
    });
  }
}
