import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { HttpService } from '../../shared/http.service';
import { Category } from './category.model';

@Injectable({
  providedIn: 'root'
})
export class CategoryService extends HttpService<Category> {

  get endpoint(): string { return 'categories'; }

  constructor(http: HttpClient) { super(http); }

}
