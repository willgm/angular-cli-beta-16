import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodosComponent } from './todos.component';
import { FormsModule } from '@angular/forms';

import { TodosService } from './todos.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [TodosComponent],
  providers: [TodosService],
  exports: [TodosComponent]
})
export class TodosModule { }
