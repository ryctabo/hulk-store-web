import { Component, OnInit } from '@angular/core';
import { LocationStrategy } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material';

import { ProductService } from '../shared/product.service';
import { CategoryService } from '../../category/shared/category.service';
import { Category } from '../../category/shared/category.model';
import { Product } from '../shared/product.model';
import { Observable } from 'rxjs';

@Component({
  selector: 'hulk-product-editor',
  templateUrl: './product-editor.component.html',
  styleUrls: ['./product-editor.component.scss']
})
export class ProductEditorComponent implements OnInit {

  productForm: FormGroup;

  categories: Category[];

  product: Product;

  constructor(private _productService: ProductService,
    private _categoryService: CategoryService,
    private _builder: FormBuilder,
    private _snackBar: MatSnackBar,
    private _location: LocationStrategy,
    private _route: ActivatedRoute) { }

  ngOnInit() {
    this.product = this._route.snapshot.data['product'] || {};
    this.productForm = this._builder.group({
      name: ['', Validators.required],
      price: [0, [Validators.required, Validators.min(1)]],
      category: [0, Validators.required]
    });

    this._categoryService.get().subscribe(
      (data: Category[]) => {
        this.categories = data;
      },
      error => {
        console.error(error);
      }
    );

    if (this.product.id) {
      this.productForm.setValue({
        name: this.product.name,
        price: this.product.price,
        category: this.product.category.id
      });
    }
  }

  onReset() {
    this.productForm.reset({
      name: this.product.name,
      price: this.product.price,
      category: this.product.category.id || 0
    });
  }

  onSave() {
    console.log(`Saving...`, this.productForm.value);

    const product = this.productForm.value;
    this.product.name = product.name;
    this.product.price = product.price;
    this.product.category = {
      id: product.category,
      name: ''
    };

    let promise: Observable<Product>, message: string;
    if (this.product.id) {
      message = `The product ${product.name} has been updated`;
      promise = this._productService.update(this.product.id, this.product);
    } else {
      message = `The product ${product.name} has been created`;
      promise = this._productService.save(this.product);
    }
    promise.subscribe(
      _ => {
        this.onReset();
        this._snackBar.open(message, null, { duration: 2000 });
        this._location.back();
      },
      error => {
        this._snackBar.open('There was an error, we\'re sorry');
        console.error(error);
      }
    );
  }

}
