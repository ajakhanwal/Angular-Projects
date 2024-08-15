import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class CurrencyServiceService {

  usdRateApi='https://open.er-api.com/v6/latest/USD';
  currencies='https://restcountries.com/v3.1/all?fields=currencies';

  constructor(private http:HttpClient) { }

  getUSDRates(): Observable<any> {     
    return this.http.get<any>(this.usdRateApi); 
  }

  getCurrencies(): Observable<any> {     
    return this.http.get<any>(this.currencies); 
  }

}
