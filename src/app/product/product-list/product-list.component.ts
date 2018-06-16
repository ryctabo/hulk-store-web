import { Component, OnInit } from '@angular/core';
import { ProductService } from '../shared/product.service';
import { ActivatedRoute, Router } from '@angular/router';
import { QueryParams, QueryResult } from '../../shared/http.service';
import { Product } from '../shared/product.model';
import { PageEvent, MatSelectChange } from '@angular/material';
import { CategoryService } from '../../category/shared/category.service';
import { Category } from '../../category/shared/category.model';

@Component({
  selector: 'hulk-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {

  displayedColumns = ['id', 'name', 'price', 'category', 'created', 'updated', 'actions'];

  categories: Category[] = [];

  dataSource: QueryResult<Product> = {
    items: [],
    total: 0
  };

  queryParams: QueryParams;

  constructor(private _productService: ProductService,
    private _categoryService: CategoryService,
    private _route: ActivatedRoute,
    private _router: Router) { }

  ngOnInit() {
    this._categoryService.get().subscribe((data: Category[]) => this.categories = data);
    this._route.queryParams.subscribe(
      queryParams => {
        this.queryParams = Object.assign({}, queryParams);
        if (+(queryParams.category) === 0)
          delete this.queryParams['category'];

        this._loadDataSource(this.queryParams);
      }
    );
  }

  private _loadDataSource(params: QueryParams) {
    this._productService.get(params).subscribe(
      (data: QueryResult<Product>) => this.dataSource = data,
      errorResponse => console.log(errorResponse)
    );
  }

  onSearch(value: string) {
    const url = this._router.url.split('\?')[0];
    this._router.navigate([url], {
      queryParams: {
        q: value
      },
      queryParamsHandling: 'merge'
    });
  }

  onPage(pageInfo: PageEvent) {
    const url = this._router.url.split('\?')[0];
    this._router.navigate([url], {
      queryParams: {
        start: pageInfo.pageIndex * pageInfo.pageSize,
        size: pageInfo.pageSize
      },
      queryParamsHandling: 'merge'
    });
  }

  onClean(input: any) {
    input.value = '';
    this.onSearch('');
  }

  onSelectionChange(select: MatSelectChange) {
    const url = this._router.url.split('\?')[0];
    this._router.navigate([url], {
      queryParams: {
        category: select.value
      },
      queryParamsHandling: 'merge'
    });
  }

}
