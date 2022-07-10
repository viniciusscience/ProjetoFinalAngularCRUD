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

  cadastrar(idCliente: string): Observable<ContaBanco> {
    return this.http.post<ContaBanco>(this.url + 'cadastrar', {
      idCliente,
    });
  }

  alterar(id: string, model: ContaBancoModel): Observable<ContaBanco> {
    return this.http.put<ContaBanco>(this.url + 'alterar/' + id, model);
  }

  consultar(): Observable<ContaBanco[]> {
    return this.http.get<ContaBanco[]>(this.url + 'consultar');
  }

  remover(id: string): Observable<ContaBanco> {
    return this.http.delete<ContaBanco>(this.url + 'remover/' + id);
  }
}
