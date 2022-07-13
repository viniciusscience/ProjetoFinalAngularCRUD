import { ClienteService } from './../service/cliente.service';
import { Cliente } from './../domain/cliente';
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { ClienteModel } from '../model/cliente-model';

@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.component.html',
  styleUrls: ['./cliente.component.scss'],
})
export class ClienteComponent implements OnInit {
  mensagem: string = '';
  list: ClienteModel[] = [];
  contador: number = 0;
  form: FormGroup = this.formBuilder.group({
    id: new FormControl(null),
    nome: new FormControl(null, [Validators.required, Validators.minLength(2)]),
    cpf: new FormControl(null, [Validators.required, Validators.minLength(11)]),
    email: new FormControl(null, [Validators.required, Validators.email]),
    telefone: new FormControl(null, [
      Validators.required,
      Validators.minLength(2),
    ]),
    endereco: new FormControl(null, [Validators.required]),
    dataNascimento: new FormControl(null, [Validators.required]),
  });

  constructor(
    private formBuilder: FormBuilder,
    private clienteservice: ClienteService
  ) {}

  ngOnInit(): void {
    this.carregarTabela();
  }

  private carregarTabela(): void {
    this.clienteservice.consultar().subscribe((domains: ClienteModel[]) => {
      if (domains) {
        this.list = domains;
      }
    });
  }
  editar(cliente: ClienteModel): void {
    this.form.controls['id'].setValue(cliente.id);
    this.form.controls['nome'].setValue(cliente.nome);
    this.form.controls['cpf'].setValue(cliente.cpf);
    this.form.controls['email'].setValue(cliente.email);
    this.form.controls['telefone'].setValue(cliente.telefone);
  }
  cadastrar(): void {
    const id = this.form.controls['id'].value;
    const cliente: ClienteModel = this.form.getRawValue();
    this.contador++;
    if (id) {
      this.clienteservice
        .alterar(id, cliente)
        .subscribe((domain: ClienteModel) => {
          if (domain.id) {
            this.carregarTabela();
            this.form.reset();
          }
        });
    } else {
      this.clienteservice
        .cadastrar(cliente)
        .subscribe((domain: ClienteModel) => {
          if (domain.id) {
            this.list.push(domain);
            this.mensagem = 'CLIENTE CADASTRADO COM SUCESSO';

            this.form.reset();
          }
        });
    }
  }
}
