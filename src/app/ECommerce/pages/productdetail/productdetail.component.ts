import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { ProductsService } from '../../services/products.service';
import { product } from '../productview/product.modal';

@Component({
  selector: 'app-productdetail',
  templateUrl: './productdetail.component.html',
  styleUrls: ['./productdetail.component.css']
})
export class ProductdetailComponent implements OnInit {
  productId: any;
  productDetails: any;

  constructor(
    private route: ActivatedRoute,
    private router:Router,
    private service: ProductsService
  ) {
    this.route.params.subscribe((res: any) => {
      this.productId = res.id;
    })
  }

  ngOnInit(): void {
    this.getProductsById();
  }
  backToHome() {
    this.router.navigate(['/']);
  }

  getProductsById() {
    this.service.getAllProductsById(this.productId).subscribe((res: any) => {
      console.log(res);
      this.productDetails = res;
    })
  }
  showAddToCartButton: boolean = true;

  addToCart(productDetails: product) {
    this.showAddToCartButton = false;
    this.service.addToCart(productDetails);
  }

  removeItem(productDetails: product) {
    this.showAddToCartButton = true;
    this.service.removeCartItem(productDetails);
  }

}
