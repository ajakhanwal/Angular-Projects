import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(private route:Router) {
  }

  ngOnInit(): void {
  }

  navigateCurrencyConvertor(){
    this.route.navigate(['/currency-convertor']);
  }
  navigateWeatherForecast(){
     this.route.navigate(['/weather-forecast-app']);
  }
  navigateToDo(){
    this.route.navigate(['/to-do-app']);
  }

}
