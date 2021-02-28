import { Observable } from 'rxjs'
import { ICurrentWeather } from 'src/app/current-weather/interfaces'

export interface IWeatherService {
  getCurrentWeather(
    city: string,
    country: string
    ): Observable<ICurrentWeather>
}
