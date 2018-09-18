import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import {
  MatTableModule,
  MatCardModule,
  MatPaginatorModule,
  MatSelectModule,
  MatDialogModule
} from '@angular/material';

import { SharedModule } from '../shared/shared.module';

import { ProductListComponent } from './product-list/product-list.component';
import { ProductEditorComponent } from './product-editor/product-editor.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { StockEditorComponent } from './stock-editor/stock-editor.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule,
    SharedModule,

    /** Material Design Modules */
    MatTableModule,
    MatCardModule,
    MatPaginatorModule,
    MatSelectModule,
    MatDialogModule
  ],
  declarations: [
    ProductListComponent,
    ProductEditorComponent,
    ProductDetailComponent,
    StockEditorComponent
  ],
  entryComponents: [StockEditorComponent]
})
export class ProductModule { }
