import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductviewComponent } from './ECommerce/pages/productview/productview.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProductdetailComponent } from './ECommerce/pages/productdetail/productdetail.component';
import { HeaderComponent } from './ECommerce/pages/header/header.component';
import { CartComponent } from './ECommerce/pages/cart/cart.component';
import { DataComponent } from './FilterData/data/data.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { Ng2OrderModule } from 'ng2-order-pipe';

@NgModule({
  declarations: [
    AppComponent,
    ProductviewComponent,
    ProductdetailComponent,
    HeaderComponent,
    CartComponent,
    DataComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    NgxPaginationModule,
    // Ng2OrderModule
    // Ng2SearchPipeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
