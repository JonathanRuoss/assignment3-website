import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RetirementCalculatorServiceService {

  constructor(private http: HttpClient) { }

  CalculateRetirement(data) {
    return this.http.post("http://api.jonathanruoss.com/calculator/retirement", data);
  }
}
