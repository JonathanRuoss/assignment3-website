import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BmiCalculatorServiceService {

  constructor(private http: HttpClient) { }

  CalculateBmi(data) {
    return this.http.post("http://api.jonathanruoss.com/calculator/bmi", data);
  }
}