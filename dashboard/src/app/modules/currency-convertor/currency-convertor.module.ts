import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CurrencyConvertorComponent } from './components/currency-convertor/currency-convertor.component';
import { CurrencySelectorComponent } from './components/currency-selector/currency-selector.component';
import { CurrenciesComponent } from './components/currency-selector/currencies/currencies.component';
import {ConvertorRoutingModule} from './currency-routing.module'
import {CurrencyServiceService} from './service/currency-service.service'

import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    CurrencyConvertorComponent,
    CurrencySelectorComponent,
    CurrenciesComponent],
  imports: [
    CommonModule,
    ConvertorRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [
    CurrencyServiceService
  ]
})
export class CurrencyConvertorModule { }
