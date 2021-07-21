
import { NgForm } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { delay, switchMap, tap } from 'rxjs/operators';
import { Store } from 'src/app/shared/interfaces/stores.interface';
import { DataService } from 'src/app/shared/services/data.service';
import { Details, Order } from 'src/app/shared/interfaces/order.interface';

import { Router } from '@angular/router';


@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.scss']
})
export class OrdersComponent implements OnInit {
 
  cart$ = this.shoppingCartSvc.cartAction$;

  constructor(private shoppingCartSvc: DataService) { }

  ngOnInit(): void {
  }
}
