import { Component, OnInit } from '@angular/core';
import {WeatherService} from '../../service/weather.service'

@Component({
  selector: 'app-weather-app',
  templateUrl: './weather-app.component.html',
  styleUrls: ['./weather-app.component.css']
})
export class WeatherAppComponent implements OnInit {

  public imgPath:string="https://www.weatherbit.io/static/img/icons/";
  public forecast:any;
  public selectedCity:string='Select City';
  public cities:any=[
    'Toronto', 'New York', 'London', 'Los Angeles', 'Tokyo', 'Mumbai', 'Paris', 'Berlin', 'Dubai', 'New Delhi'
  ]; 
  constructor(private ws:WeatherService) { }

  ngOnInit(): void {
  }

  fetchWeather(){
    this.ws.fetchWeather(this.selectedCity).subscribe(response => {
      console.log(response);
      this.forecast=response.data;
    },
    error => {
      console.error('Error fetching data', error);
    });
  }

  changeCity(){
    console.log(this.selectedCity);
  }

}
