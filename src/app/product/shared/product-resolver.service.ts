import { Injectable } from '@angular/core';
import { LocationStrategy } from '@angular/common';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

import { ProductService } from './product.service';
import { Product } from './product.model';

import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { HttpErrorResponse } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductResolver implements Resolve<Product> {

  constructor(private _service: ProductService,
    private _location: LocationStrategy) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Product> {
    const id = route.params['id'];
    if (isNaN(id)) {
      console.log(`Product ID was not a number: ${id}`);
      this._location.back();
      return of(null);
    }
    return this._service.getById(+id).pipe(
      catchError(_ => {
        this._location.back();
        return of(null);
      })
    );
  }

}
