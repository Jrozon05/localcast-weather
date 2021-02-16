import { HttpClient, HttpParams } from '@angular/common/http'
import { Injectable } from '@angular/core'

import { ICurrentWeatherData } from './interfaces/icurrent-weatherdata'
import { environment } from '../../../environments/environment'
import { Observable } from 'rxjs'
import { map } from 'rxjs/operators'
import { ICurrentWeather } from 'src/app/current-weather/interfaces'

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor(private httpClient: HttpClient) { }

  getCurrentWeather(city: string, country: string): Observable<ICurrentWeather> {
    const uriParams = new HttpParams()
          .set('q', `${city}, ${country}`)
          .set('appid', environment.appId)

    return this.httpClient
              .get<ICurrentWeatherData>(`${environment.baseUrl}api.openweathermap.org/data/2.5/weather?`, { params: uriParams })
              .pipe(map(data => this.tranformToICurrentWeather(data)))
  }

  private tranformToICurrentWeather(data: ICurrentWeatherData): ICurrentWeather {
    return {
      city: data.name,
      country: data.sys.country,
      date: data.dt * 1000,
      image: `http://openweathermap.org/img/w/${data.weather[0].icon}.png`,
      temperature: this.converKelvinToFahrenheit(data.main.temp),
      description: data.weather[0].description
    }
  }

  private converKelvinToFahrenheit(kelvin: number): number {
    return kelvin * 9 / 5 - 459.67
  }
}
