import { ContaBancoModel } from './../model/conta-banco-model';
import { ContaBanco } from './../domain/conta-banco';

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ContaBancoService {
  private url = 'http://localhost:8080/contabanco/';

  constructor(private http: HttpClient) {}

  cadastrar(idCliente: string): Observable<ContaBancoModel> {
    return this.http.post<ContaBancoModel>(
      this.url + 'cadastrar/' + idCliente,
      {
        idCliente,
      }
    );
  }

  alterar(id: string, model: ContaBancoModel): Observable<ContaBancoModel> {
    return this.http.put<ContaBancoModel>(this.url + 'alterar/' + id, model);
  }

  consultar(): Observable<ContaBancoModel[]> {
    return this.http.get<ContaBancoModel[]>(this.url + 'consultar');
  }

  remover(id: string): Observable<ContaBancoModel> {
    return this.http.delete<ContaBancoModel>(this.url + 'remover/' + id);
  }
}
