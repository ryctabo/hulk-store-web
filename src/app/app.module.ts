import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { LayoutModule } from './layout/layout.module';
import { CategoryModule } from './category/category.module';
import { ProductModule } from './product/product.module';

import { RootComponent } from './layout/root/root.component';

@NgModule({
  declarations: [],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,

    LayoutModule,
    CategoryModule,
    ProductModule
  ],
  providers: [],
  bootstrap: [RootComponent]
})
export class AppModule { }
