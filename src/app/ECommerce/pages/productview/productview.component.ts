import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../services/products.service';
import { product } from './product.modal';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-productview',
  templateUrl: './productview.component.html',
  styleUrls: ['./productview.component.css']
})
export class ProductviewComponent implements OnInit {

  constructor(
    private service: ProductsService,
    private router: Router
  ) { }
  allProducts: any | product;
  ngOnInit(): void {
    this.getAllProducts();
  }

  getAllProducts() {
    this.service.getAllProducts().subscribe((res: any) => {
      console.log(res.products);
      this.allProducts = res;
    })
  }
  gotoDetails(id: any) {
    this.router.navigate([`/product-detail/${id}`])
  }

  addToCart(item:any){
    this.service.addToCart(item);
  }
  removeItem(item:any){
    this.service.removeCartItem(item);
  }

}
