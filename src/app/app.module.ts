import { HomeModule } from './home/home.module';
import { ContabancoModule } from './contabanco/contabanco.module';
import { ClienteModule } from './cliente/cliente.module';
import { MenuModule } from './menu/menu.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ContaComponent } from './conta/conta.component';

@NgModule({
  declarations: [AppComponent, ContaComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MenuModule,
    ClienteModule,
    ContabancoModule,
    HomeModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
