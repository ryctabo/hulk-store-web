import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product, Stock } from '../shared/product.model';
import { StockService } from '../shared/stock.service';
import { QueryResult } from '../../shared/http.service';

@Component({
  selector: 'hulk-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {

  displayColumns = ['type', 'index', 'amount', 'message', 'created'];

  product: Product;

  dataSource: QueryResult<Stock>;

  get available(): number {
    let value = 0;
    if (this.dataSource && this.dataSource.items) {
      for (const stock of this.dataSource.items) {
        if (stock.type === 'INPUT')
          value += stock.amount;
        else
          value -= stock.amount;
      }
    }
    return value;
  }

  constructor(private _service: StockService,
    private _route: ActivatedRoute) { }

  ngOnInit() {
    this.product = this._route.snapshot.data['product'];
    this._service.get(this.product.id).subscribe(
      data => this.dataSource = data,
      error => console.log(error)
    );
  }

}
