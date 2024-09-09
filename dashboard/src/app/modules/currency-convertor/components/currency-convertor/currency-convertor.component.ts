import { Component, OnInit, ViewChild} from '@angular/core';
import {CurrencyServiceService} from '../../service/currency-service.service';
// import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';


@Component({
  selector: 'app-currency-convertor',
  templateUrl: './currency-convertor.component.html',
  styleUrls: ['./currency-convertor.component.css']
})
export class CurrencyConvertorComponent implements OnInit {

  @ViewChild('from') fromCmp:any;
  @ViewChild('to') toCmp:any;
  public from:any;
  public resultFrom:any;
  public resultTo:any;
  public resultInfo:any;
  public to:any;
  public isResult:boolean=false;
  public amount_value:any=1.00;
  constructor(private cs:CurrencyServiceService) { 
  }

  ngOnInit(): void {
  }

  // get from_symbol() {
  //   return this.from.symbol;
  // }

  public selectFrom = (currency:any): void =>{
    this.from=currency;
    if(this.isResult)
      this.exchange();
  }

  public selectTo = (currency:any): void =>{
    this.to=currency;
    if(this.isResult)
      this.exchange();
  }

  changeAmountValue(){
    this.amount_value = (Math.round( this.amount_value * 100) / 100).toFixed(2);
    if(this.isResult)
      this.exchange();
  }

  public exchange(){
    let rateBase = this.to.rate/this.from.rate;
    let result = this.amount_value*rateBase;
    this.resultFrom = this.amount_value + " " + (this.from.full_name ? this.from.full_name :  this.from.name) + " =";
    this.resultTo = (result).toFixed(5) + " " + (this.to.full_name ? this.to.full_name :  this.to.name);
    this.resultInfo = (1).toFixed(2) + " " + this.from.name + " = " + rateBase.toFixed(6) + " " +this.to.name + '\n '
                      +  (1).toFixed(2) + " " + this.to.name + " = " + (1/rateBase).toFixed(6) + " " +this.from.name ;
    console.log('RateBase:' +rateBase);
  }

  public switchCurrencies(){
    let temp : any = this.from;
    this.fromCmp.selectCurrencyFunc(this.to);
    this.toCmp.selectCurrencyFunc(temp);
    if(this.isResult)
      this.exchange();
  }

  submitForm(){
    this.exchange();
    this.isResult= true;
    //var date = new Date(this.service.getLastUpdate());
    //this.lastUpdate = date.toLocaleString()  + " UTC";
  }
}
