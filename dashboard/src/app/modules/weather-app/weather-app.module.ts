import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { WeatherAppComponent } from './components/weather-app/weather-app.component';
import {WeatherService} from './service/weather.service'
import {WeatherRoutingModule} from './weather-app-routing.module'



@NgModule({
  declarations: [
    WeatherAppComponent
  ],
  imports: [
    HttpClientModule,
    FormsModule,
    CommonModule,
    WeatherRoutingModule
  ],
  providers: [
    WeatherService
  ],
})
export class WeatherAppModule { }
