import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CountriesService {
  http = inject(HttpClient);

  constructor() {}

  getCountrys(): Observable<any> {
    return this.http.get('https://restcountries.com/v3.1/all');
  }
}
