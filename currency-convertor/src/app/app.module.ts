import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { CurrencyConvertorComponent } from './components/currency-convertor/currency-convertor.component';
import { CurrencySelectorComponent } from './components/currency-selector/currency-selector.component';
import { CurrenciesComponent } from './components/currency-selector/currencies/currencies.component';

@NgModule({
  declarations: [
    AppComponent,
    CurrencyConvertorComponent,
    CurrencySelectorComponent,
    CurrenciesComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
