import { Cliente } from './cliente';
export interface ContaBanco {
  id: string;
  cliente: Cliente;
  numConta: number;
  tipo: string;
  saldo: number;
  valor: number;
  agencia: number;
  senha: number;
}
