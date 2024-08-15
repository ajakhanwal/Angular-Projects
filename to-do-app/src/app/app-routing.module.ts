import { NgModule } from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {TodoComponent} from './components/todo/todo.component';
import {AddTaskComponent} from "./components/add-task/add-task.component";
import {ViewTaskComponent} from "./components/view-task/view-task.component";
import {EditTaskComponent} from "./components/edit-task/edit-task.component";
import { CommonModule } from '@angular/common';

const routes: Routes = [
  {
    path: 'tasks',
    component: TodoComponent
  },
  {
    path: 'tasks/add',
    component: AddTaskComponent,
    data: {title: 'Add new task'}
  },
  {
    path: 'tasks/view/:id',
    component: ViewTaskComponent,
    data: {title: 'Task to do'}
  },
  {
    path:'tasks/edit/:id',
    component: EditTaskComponent,
    data: {title: 'Task edition'}
  },

  { path: '',
    redirectTo: '/tasks',
    pathMatch: 'full'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
