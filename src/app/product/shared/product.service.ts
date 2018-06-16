import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { HttpService } from '../../shared/http.service';
import { Product } from './product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService extends HttpService<Product> {

  get endpoint(): string { return 'products'; }

  constructor(http: HttpClient) { super(http); }

}
