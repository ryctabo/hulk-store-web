import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { MatTableModule, MatCardModule, MatPaginatorModule } from '@angular/material';

import { SharedModule } from '../shared/shared.module';

import { ProductListComponent } from './product-list/product-list.component';
import { RouterModule } from '@angular/router';
import { ProductEditorComponent } from './product-editor/product-editor.component';

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
  ],
  declarations: [
    ProductListComponent,
    ProductEditorComponent
  ]
})
export class ProductModule { }
