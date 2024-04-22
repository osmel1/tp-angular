import { Component } from '@angular/core';
import {RouterLink, RouterOutlet} from '@angular/router';
import {NgForOf} from "@angular/common";
import {HttpClientModule} from "@angular/common/http";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink, NgForOf,HttpClientModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  setCurrentAction(action: any) {
    this.currentAction = action;
  }
  title = 'oussama-abdelali';
  actions: Array<any> = [
    { title: 'Home', path: '/home', icon: 'house' },
    { title: 'Products', path: '/products', icon: 'arrow-down-up' },
    { title: 'New Product', path: '/new-product', icon: 'plus-circle' },
  ];
  currentAction: any;
}
