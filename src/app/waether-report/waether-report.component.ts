import { Component, OnInit } from '@angular/core';
import { WeatherService } from 'src/app/weather.service';
import { weatherData } from 'src/assets/weatherData';
 

@Component({
  selector: 'app-waether-report',
  templateUrl: './waether-report.component.html',
  styleUrls: ['./waether-report.component.css']
})
export class WaetherReportComponent implements OnInit {
  weather : weatherData
  constructor(private weatherDataService :  WeatherService) { }
  ngOnInit() {
    this.weatherDataService.getData()
    .subscribe(data=> this.weather = data);
    console.log(this.weather);
  }

}
