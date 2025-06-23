import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class Apiservices {
  constructor(private http:HttpClient) { }
   getProducts() {
    return this.http.get('https://fakestoreapi.com/products');
  }
}
