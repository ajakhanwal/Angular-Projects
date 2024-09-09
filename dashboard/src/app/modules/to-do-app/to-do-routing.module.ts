import { NgModule } from '@angular/core';import { RouterModule, Routes } from '@angular/router';
import { TodoComponent } from './components/todo/todo.component';
const routes: Routes = [
  { path: '/to-do-app', component: TodoComponent },
//   { path: '/currency-convertor', component: CurrencyConvertorComponent }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ToDoRoutingModule {}