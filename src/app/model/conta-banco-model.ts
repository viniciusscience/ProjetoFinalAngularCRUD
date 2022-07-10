import { Cliente } from '../domain/cliente';

export interface ContaBancoModel {
  id: string;
  cliente: Cliente;
  numConta: number;
  tipo: string;
  saldo: number;
  valor: number;
  agencia: number;
  senha: number;
}
