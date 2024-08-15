import { Component, OnInit } from '@angular/core';
import {CurrencyServiceService} from '../../service/currency-service.service';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-currency-convertor',
  templateUrl: './currency-convertor.component.html',
  styleUrls: ['./currency-convertor.component.css']
})
export class CurrencyConvertorComponent implements OnInit {

  currencyForm: FormGroup;
  constructor(private fb: FormBuilder, private cs:CurrencyServiceService) { 
    this.currencyForm = this.fb.group({
      amount: ['', [Validators.required]],
      from: ['', [Validators.required]],
      to: ['', [Validators.required]],    
    });
  }

  ngOnInit(): void {
    this.cs.getUSDRates().subscribe( response=>{
      console.log('getting USD Response');
      console.log(response.rates);
    }, error => {console.error('Error fetching data', error);}
    )

    this.cs.getCurrencies().subscribe( response=>{
      console.log('getting currencies Response');
      console.log(response);
    }, error => {console.error('Error fetching data', error);}
    )
  }

  changeAmountValue(){

  }

  changeCurrency(){

  }

  switchCurrency(){

  }

  submitForm(){

  }
}
