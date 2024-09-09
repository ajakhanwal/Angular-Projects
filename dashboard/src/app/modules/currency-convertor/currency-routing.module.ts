import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CurrencyConvertorComponent } from './components/currency-convertor/currency-convertor.component';
const routes: Routes = [
  { path: '', component: CurrencyConvertorComponent },
//   { path: '/currency-convertor', component: CurrencyConvertorComponent }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ConvertorRoutingModule {}