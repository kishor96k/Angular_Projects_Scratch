import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductviewComponent } from './ECommerce/pages/productview/productview.component';
import { ProductdetailComponent } from './ECommerce/pages/productdetail/productdetail.component';
import { CartComponent } from './ECommerce/pages/cart/cart.component';
import { DataComponent } from './FilterData/data/data.component';

// *************************for the Ecommerce project start
// const routes: Routes = [{
//   path: '',
//   component: ProductviewComponent
// }, {
//   path: 'product-detail/:id',
//   component: ProductdetailComponent
// }, {
//   path: 'cart',
//   component: CartComponent
// }];
//************************ */ for the Ecommerce project end


// ***********************for the FilterData project start
const routes: Routes = [{
  path: '',
  component: DataComponent
}]
//************************ */ for the FilterData project end


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
