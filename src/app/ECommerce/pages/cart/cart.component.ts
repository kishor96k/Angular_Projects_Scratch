import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../services/products.service';
import { product } from '../productview/product.modal';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  showProducts: any;
  totalAmount: number = 0;

  constructor(
    private service: ProductsService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.service.products().subscribe((res: any) => {
      this.showProducts = res;
      this.totalAmount = this.service.calculatePrice();
    })
  }
  removeItem(item: product) {
    this.service.removeCartItem(item);
  }

  backToHome() {
    this.router.navigate(['/']);
  }
  removeAll() {
    const userConfirmed = window.confirm("Are you sure you want to remove all items?");
    if (userConfirmed) {
      this.service.removeAllItems();
    }
  }



}
