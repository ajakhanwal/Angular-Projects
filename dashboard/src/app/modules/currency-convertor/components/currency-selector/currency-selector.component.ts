import { Component, Input, OnInit } from '@angular/core';
import {CurrencyServiceService} from '../../service/currency-service.service';
import {ViewChild} from '@angular/core';

@Component({
  selector: 'app-currency-selector',
  templateUrl: './currency-selector.component.html',
  styleUrls: ['./currency-selector.component.css']
})
export class CurrencySelectorComponent implements OnInit {

  @Input() changeCurrency:any;
  @Input() selectorId:any;
  @ViewChild('search_input', {static: false}) search_input:any;

  currencies:any;
  selectedCurrency:any;
  noResultsFind:boolean=false;
  public ignoreFocusOut=false;
  edited:boolean=true;
  public elementCurrenciesList:any;
  findCurrency:string="";
  constructor(private cs:CurrencyServiceService) { }

  ngOnInit(): void {
    this.cs.getCurrenciesObservable().subscribe( response=>{
      console.log('this is from currency');
      console.log(this.selectorId);
      this.currencies=response;
      this.selectedCurrency = this.cs.getCurrencies()[0];
    }, error => {console.error('Error fetching data', error);}
    )
    //this.selectedCurrency = this.cs.getCurrencies()[0];
    console.log('Clicking dropdown');
    console.log(this.cs.getCurrencies());
  }
  ngAfterViewInit(): void{
    this.elementCurrenciesList = document.getElementById('currenciesList ' + this.selectorId)
    //this.selectCurrencyOnStart();
  }

  selectCurrencyFunc(currency:any){
    console.log("selected currency");
    console.log(currency);
    this.selectedCurrency=currency;
    this.changeCurrency(currency);
  }

  dropClick(){
    this.findCurrency="";
    this.ShowDropdown();
    //this.changeDetector.detectChanges();
    this.search_input.nativeElement.focus();
    //this.valueFinding();
  }

  valueFinding(){
    this.currencies=this.cs.getCurrencies().filter(item =>
      item.name.toLowerCase().includes(this.findCurrency.toLowerCase())
      || item.full_name.toLowerCase().includes(this.findCurrency.toLowerCase())
    );
    this.noResultsFind = this.currencies.length == 0;
  }

  ShowDropdown()
  {
    console.log("showDropdown");
    this.edited = false;
    this.elementCurrenciesList.className = "dropdown-menu scrollable-menu show";
  }

  HideDropdown()
  {
    console.log("hideDropdown");
    this.edited = true;
    this.elementCurrenciesList.className = "dropdown-menu scrollable-menu";
  }

  focusOutInput(){
    if(!this.ignoreFocusOut)
      this.HideDropdown();
  }


}
