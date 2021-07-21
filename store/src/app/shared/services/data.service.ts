import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable,BehaviorSubject } from 'rxjs';
import { Order, DetailsOrder } from '../interfaces/order.interface';
import { Store } from '../interfaces/stores.interface';

@Injectable({
  providedIn: 'root'
})

export class DataService {
  stores: Store[] = [];
  private apiURL = 'http://localhost:3000';
  private cartSubject = new BehaviorSubject<Store[]>([]);
  constructor(private http: HttpClient) { }
  

  getStores(): Observable<Store[]> {
    return this.http.get<Store[]>(`${this.apiURL}/stores`)
  }
  getOrder(): Observable<Order[]> {
    return this.http.get<Order[]>(`${this.apiURL}/orders`)
  }
  get cartAction$(): Observable<Store[]> {
    return this.cartSubject.asObservable();
  }

  saveOrder(order: Order): Observable<Order> {
    return this.http.post<Order>(`${this.apiURL}/orders`, order);
  }

  saveDetailsOrder(details: DetailsOrder): Observable<DetailsOrder> {
    return this.http.post<DetailsOrder>(`${this.apiURL}/detailsOrders`, details);
  }


}
