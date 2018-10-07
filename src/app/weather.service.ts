import { Injectable } from '@angular/core';
import { weatherData } from 'src/assets/weatherData';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor(private http : HttpClient ) { }

  getData() {
    return this.http.get<weatherData>('../assets/weather_data.json');
  }
}
