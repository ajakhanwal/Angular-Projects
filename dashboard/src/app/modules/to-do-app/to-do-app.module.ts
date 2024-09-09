import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ToDoRoutingModule } from './to-do-routing.module';

import { TodoComponent } from './components/todo/todo.component';
import { AddTaskComponent } from './components/add-task/add-task.component';
import { EditTaskComponent } from './components/edit-task/edit-task.component';
import { DeleteTaskComponent } from './components/delete-task/delete-task.component';
import { ViewTaskComponent } from './components/view-task/view-task.component';


@NgModule({
  declarations: [
    TodoComponent,
    AddTaskComponent,
    EditTaskComponent,
    DeleteTaskComponent,
    ViewTaskComponent
  ],
  imports: [
    CommonModule,
    ToDoRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ]
})
export class ToDoAppModule { }
