// src/app/home/home.component.ts
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DataService } from 'src/data-service.service';
import { CartComponent } from './cart/cart.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  items: any[] = [];
  filteredItems: any[] = [];
  searchQuery: string = '';
  cartItems: any[] = [];
  message: string | null = null;

  constructor(private dataService: DataService, public dialog: MatDialog , public router: Router) {}

  ngOnInit(): void {
    this.dataService.fetchItems().subscribe(data => {
      this.items = data;
      this.filteredItems = data;

    });

    this.dataService.cart$.subscribe(items => {
      this.cartItems = items;
    });
  }

  search() {
    this.filteredItems = this.items.filter(item =>
      item.Year.toLowerCase().includes(this.searchQuery.toLowerCase())
    );
  }

  addToCart(item: any) {
    this.dataService.addToCart(item);
    this.showMessage("Added Successfully");
  }

  showMessage(message: string) {
    this.message = message;
    setTimeout(() => {
      this.message = null;
    }, 1000); 
  }

  openCartDialog(): void {
    this.dialog.open(CartComponent, {
      data: this.cartItems,
      disableClose: true
    });
  }

  opena1(){
    console.log("if")
    this.router.navigate(['/a1'])
  }
  
}
