import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../services/products.service';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  public cartItems: number = 0;

  constructor(
    private service: ProductsService,
    private router:Router
  ) { }

  ngOnInit(): void {
    this.service.products().subscribe((res: any) => {
      this.cartItems = res.length;
    })
  }
  onCartPage(){
    if(this.cartItems!==0){
      this.router.navigate(['/cart'])
    }else{
      alert("please add the items");
    }
  }

}
