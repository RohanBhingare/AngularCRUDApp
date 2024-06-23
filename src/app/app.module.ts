import { Component, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { CartComponent } from './home/cart/cart.component';
import { HomeComponent } from './home/home.component';
import { A1Component } from './a1/a1.component';


const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'cart',
    component: CartComponent
  },
  {
   path : 'a1',
   component: A1Component
  },

];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CartComponent,
    A1Component
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatDialogModule,
    MatButtonModule
  ],
 
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
