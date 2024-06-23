import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-a1',
  templateUrl: './a1.component.html',
  styleUrls: ['./a1.component.css']
})

export class A1Component {
  constructor( public router: Router) {}
  home(){
    this.router.navigate(['/'])
  }
}
