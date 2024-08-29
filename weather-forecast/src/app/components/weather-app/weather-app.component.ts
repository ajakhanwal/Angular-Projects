import { Component } from '@angular/core';

@Component({
  selector: 'app-weather-app',
  standalone: true,
  imports: [],
  templateUrl: './weather-app.component.html',
  styleUrl: './weather-app.component.css'
})
export class WeatherAppComponent {

    public cities:any=[
      'Toronto', 'New York', 'London', 'Los Angeles', 'Tokyo', 'Mumbai', 'Paris', 'Berlin', 'Dubai', 'New Delhi'
    ]; 
  
}
