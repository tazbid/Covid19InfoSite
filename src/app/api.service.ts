import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observer, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }


  getCountries(){
    return this.http.get('https://api.covid19api.com/countries');
  }

  getCountryData(country:any):Observable<any>{
    return this.http.get<any>('https://api.covid19api.com/total/dayone/country/'+country);
  }


}
