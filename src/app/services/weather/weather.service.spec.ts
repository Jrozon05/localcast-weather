import { TestBed, inject } from '@angular/core/testing'
import { WeatherService } from './weather.service'
import { HttpClientTestingModule } from '@angular/common/http/testing'

describe('Service: Weather', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [WeatherService]
    })
  })

  it('should ...', inject([WeatherService], (service: WeatherService) => {
    expect(service).toBeTruthy()
  }))
})
