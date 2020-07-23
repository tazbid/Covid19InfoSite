import { Component } from '@angular/core';
import { ApiService } from './api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  countries : any;
  countryData:any;

  constructor(private apiService: ApiService){
    this.getCountries();
  }

  getCountries(){
    this.apiService.getCountries().subscribe(
      data =>{
        this.countries = data;
      }
    )
  }


  getCountryData(country:any){
    this.apiService.getCountryData(country.target.value).subscribe(
      data =>{
        this.countryData = data;
      }
    );
  }

  title = 'Covid19';
}
