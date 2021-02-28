import { of } from 'rxjs'
import { Observable } from 'rxjs'
import { ICurrentWeather } from 'src/app/current-weather/interfaces'
import { IWeatherService } from '../interfaces/iweather-service'

export const fakeWeather: ICurrentWeather = {
  city: 'Yonkers',
  country: 'US',
  date: 1485789600,
  image: '',
  temperature: 280.72,
  description: 'light intensity drizzle'
}

export class WeatherServiceFake implements IWeatherService {
  public getCurrentWeather(
    city: string,
    country: string
  ): Observable<ICurrentWeather> {
    return of(fakeWeather)
  }
}
