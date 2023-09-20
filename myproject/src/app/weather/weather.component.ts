import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';
import { WeatherService } from '../weather.service';


@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent {

  constructor(private router:Router,private weatherService: WeatherService){
    this.getWeeklyWeatherData();
  }
  
  helper=new JwtHelperService;
  token:any
  cityName: string = 'Tunis'; // Change this to your desired city
  weeklyWeatherData: any;


  getWeeklyWeatherData() {
    this.weatherService.getWeeklyWeather(this.cityName).subscribe(
      data => {
        this.weeklyWeatherData = data.forecast.forecastday;
        
      },
      error => {
        console.log('Error fetching weekly weather data:', error);
      }
    );


  }
  ngOnInit(): void {

    }

goToHome(){

    this.token=localStorage.getItem('token')
   console.log(this.token)
   let currentMember=this.helper.decodeToken(this.token)
   console.log(currentMember)
   let routing=currentMember.name
         console.log(currentMember)
         console.log(routing)
         if(routing=='admin'){
           this.router.navigate(['/Admin'])
 
         }
         else{
           this.router.navigate(['/Home'])
         }
 }





  }


