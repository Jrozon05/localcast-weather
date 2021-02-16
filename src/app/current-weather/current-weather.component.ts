import { Component, OnInit } from '@angular/core'
import { WeatherService } from '../services/weather/weather.service'

import { ICurrentWeather } from './interfaces'

@Component({
  selector: 'app-current-weather',
  templateUrl: './current-weather.component.html',
  styleUrls: ['./current-weather.component.scss']
})
export class CurrentWeatherComponent implements OnInit {

  current: ICurrentWeather

  constructor(private service: WeatherService) {
  }

  ngOnInit() {
    this.service.getCurrentWeather('Yonkers', 'US')
        .subscribe((data) => this.current = data)
   }
}
