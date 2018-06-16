import { Component, OnInit } from '@angular/core';
import { ProductService } from '../shared/product.service';
import { ActivatedRoute, Router } from '@angular/router';
import { QueryParams, QueryResult } from '../../shared/http.service';
import { Product } from '../shared/product.model';
import { finalize } from 'rxjs/operators';
import { PageEvent } from '@angular/material';

@Component({
  selector: 'hulk-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {

  displayedColumns = ['id', 'name', 'price', 'category', 'created', 'updated'];

  dataSource: QueryResult<Product> = {
    items: [],
    total: 0
  };

  queryParams: QueryParams;

  constructor(private _service: ProductService,
    private _route: ActivatedRoute,
    private _router: Router) { }

  ngOnInit() {
    this._route.queryParams.subscribe(
      queryParams => {
        this.queryParams = queryParams;
        this._loadDataSource(queryParams);
      }
    );
  }

  private _loadDataSource(params: QueryParams) {
    this._service.get(params).subscribe(
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

}
