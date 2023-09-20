import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class WeatherService {

 

  constructor(private http: HttpClient) { }

  getWeeklyWeather(city: string): Observable<any> {
    const url = `http://api.weatherapi.com/v1/forecast.json?key=bdb7eaac3b2242acbd522810230408 &q=tunisia&days=7&aqi=no&alerts=no`;
    return this.http.get<any>(url);
  }

}
