/* tslint:disable:no-unused-variable */
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing'
import { injectSpy } from 'angular-unit-test-helper'

import { CurrentWeatherComponent } from './current-weather.component'
import { WeatherService } from '../services/weather/weather.service'
import { of } from 'rxjs'
import { fakeWeather } from '../services/weather/fakes/weather.service.fake'
import { By } from 'protractor'

describe('CurrentWeatherComponent', () => {
  let component: CurrentWeatherComponent
  let fixture: ComponentFixture<CurrentWeatherComponent>
  let weatherServiceMock: jasmine.SpyObj<WeatherService>

  beforeEach(waitForAsync(() => {
    const weatherServiceSpy = jasmine.createSpyObj('WeatherService', ['getCurrentWeather'])
    TestBed.configureTestingModule({
      declarations: [ CurrentWeatherComponent ],
      providers: [{
        provide: WeatherService, useClass: weatherServiceSpy
      }],
    })
    .compileComponents()
    weatherServiceMock = injectSpy(WeatherService)
  }))

  beforeEach(() => {
    fixture = TestBed.createComponent(CurrentWeatherComponent)
    component = fixture.componentInstance
  })

  it('should create', () => {
    // Arrange
    weatherServiceMock.getCurrentWeather.and.returnValue(of())

    // Act
    fixture.detectChanges()

    // Assert
    expect(component).toBeTruthy()
  })

  it('should get currentWeather from WeatherService', () => {
    // Arrange
    weatherServiceMock.getCurrentWeather.and.returnValue(of())

    // Act
    fixture.detectChanges() // triggers ngOnInit()

    // Assert
    expect(weatherServiceMock.getCurrentWeather).toHaveBeenCalledTimes(1)
  })

  it ('should eagerly load currentWeather in Yonkers from weatherService', () => {
    // Arrange
    weatherServiceMock.getCurrentWeather.and.returnValue(of(fakeWeather))

    // Act
    fixture.detectChanges() // trigger ngOnInit()

    // Assert
    expect(component.current).toBeDefined()
    expect(component.current.city).toEqual('Yonkers')
    expect(component.current.temperature).toEqual(280.72)
  })
})
