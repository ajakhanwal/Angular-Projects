import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable(
//   {
//   providedIn: 'root'
// }
)
export class WeatherService {

  //public apiKey = '5c84ea0be3d44f5abc1f23246983f35f'; 
  //public url = `https://api.weatherbit.io/v2.0/forecast/daily?city=`;
  public apiKey='be30816d627b4c4787a9768e7ed582f4';
  public url = `https://api.weatherbit.io/v2.0/forecast/daily?city=`;
  //http://api.weatherapi.com/v1/forecast.json?key=b32c8b524f504689abc222150242208&q=London&days=5&aqi=no&alerts=no

  constructor(private http:HttpClient) { 
  }

  public fetchWeather(city:any): Observable<any> {
    return this.http.get(`${this.url}${city}&key=${this.apiKey}&days=5`);
    //return this.http.get(`${this.url}${this.apiKey}&q=${city}&days=5&aqi=no&alerts=no`);
    //https://api.weatherbit.io/v2.0/forecast/daily?city=Tokyo&key=5c84ea0be3d44f5abc1f23246983f35f&days=5'
    //`https://api.weatherbit.io/v2.0/forecast/daily?city=${city}&key=${apiKey}&days=5`;
  }
}
