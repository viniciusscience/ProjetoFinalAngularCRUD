import { ContaComponent } from './conta/conta.component';
import { HomeComponent } from './home/home.component';
import { ContabancoComponent } from './contabanco/contabanco.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClienteComponent } from './cliente/cliente.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'cliente', component: ClienteComponent },
  { path: 'contabanco', component: ContabancoComponent },
  { path: 'conta', component: ContaComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
