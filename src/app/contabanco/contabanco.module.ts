import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContabancoComponent } from './contabanco.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MatTableModule } from '@angular/material/table';

@NgModule({
  declarations: [ContabancoComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatTableModule,
    FormsModule,
    ReactiveFormsModule,
  ],
})
export class ContabancoModule {}
