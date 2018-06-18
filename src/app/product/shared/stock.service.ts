import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AppSettings } from '../../app.settings';
import { Observable } from 'rxjs';
import { QueryResult } from '../../shared/http.service';
import { Stock } from './product.model';
import { tap, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class StockService {

  productId: number;

  get url(): string {
    return AppSettings.getApiEndpoint(`products/${this.productId}/stocks`);
  }

  private _handleError(error: any) {
    console.error(error.message, error);
    return Observable.throw(error);
  }

  constructor(private _http: HttpClient) { }

  get(productId: number): Observable<QueryResult<Stock>> {
    this.productId = productId;
    return this._http.get<QueryResult<Stock>>(this.url)
      .pipe(
        tap(console.log),
        catchError(this._handleError)
      );
  }

  save(productId: number, stock: Stock): Observable<Stock> {
    this.productId = productId;
    return this._http.post<Stock>(this.url, stock)
      .pipe(
        tap(console.log),
        catchError(this._handleError)
      );
  }

}
