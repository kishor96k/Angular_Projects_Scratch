import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { product } from '../pages/productview/product.modal';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  public cartItemlsit: any = [];
  public productList = new BehaviorSubject<any>([]);

  constructor(
    private http: HttpClient
  ) { }

  path: any = 'https://dummyjson.com/products/';

  getAllProducts() {
    return this.http.get<product>(this.path);
  }

  getAllProductsById(id: any) {
    return this.http.get<product>(this.path + id);
  }

  addToCart(data: product) {
    this.cartItemlsit.push(data);
    this.productList.next(this.cartItemlsit);
    console.log(this.cartItemlsit);
  }

  removeCartItem(data: product) {
    this.cartItemlsit.map((val: product, index: product) => {
      if (data.id === val.id) {
        this.cartItemlsit.splice(index, 1);
      }
    })
    this.productList.next(this.cartItemlsit);
  }

  products() {
    return this.productList.asObservable();
  }

  calculatePrice() {
    let total = 0;
    this.cartItemlsit.map((val: any) => {
      total = total + val.price;
    })
    return total;
  }

  removeAllItems() {
    this.cartItemlsit = [];
    this.productList.next(this.cartItemlsit);
  }
}
