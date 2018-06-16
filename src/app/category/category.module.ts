import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatTableModule, MatCardModule } from '@angular/material';

import { SharedModule } from '../shared/shared.module';

import { CategoryListComponent } from './category-list/category-list.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    SharedModule,

    /** Material Design Modules */
    MatTableModule,
    MatCardModule,
  ],
  declarations: [CategoryListComponent],
})
export class CategoryModule { }
