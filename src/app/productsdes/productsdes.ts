import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Apiservices } from '../apiservices';

@Component({
  selector: 'app-Productsdes',
  
  imports: [CommonModule], 
  templateUrl: './productsdes.html',
  styleUrls: ['./productsdes.css']
})
export class Productsdes implements OnInit {
  products: any[] = [];

  constructor(private apiservice: Apiservices) {}

  ngOnInit() {
     console.log('Productsdes initialized');
    this.apiservice.getProducts().subscribe({
      next: (data: any) => {
      console.log('API response:', data);
      this.products = data;
    },
   error: (err) => {
        console.error('Error loading data', err);
      }
    });
  }

  trackById(index: number, item: any): number {
    return item.id;
  }
}