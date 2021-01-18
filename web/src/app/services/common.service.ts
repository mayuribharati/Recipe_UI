import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  sideNavLinks = [
    {
      lable: 'Dashboard',
      routerLink: ['dashboard'],
      icon: 'fa fa-slack'
    },
    {
      lable: 'View Recipes',
      routerLink: ['recipes'],
      icon: 'fa fa-eye'
    },
    {
      lable: 'My Cookbook',
      routerLink: ['cookbook'],
      icon: 'fa fa-book'
    },
    {
      lable: 'Cart',
      routerLink: ['cart'],
      icon: 'fa fa-cart-arrow-down'
    },
    {
      lable: 'Order',
      routerLink: ['orders'],
      icon: 'fa fa-first-order'
    },
    {
      lable: 'Settings',
      routerLink: ['settings'],
      icon: 'fa fa-cog'
    }
  ];

  constructor() { }
}
