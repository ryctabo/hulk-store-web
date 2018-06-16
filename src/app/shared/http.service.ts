import { HttpClient, HttpParams } from '@angular/common/http';

import { ErrorMessage } from './http.service';
import { AppSettings } from './../app.settings';

import { Observable } from 'rxjs';
import { tap, catchError } from 'rxjs/operators';

export interface ErrorMessage {
  documentation?: string;
  messages?: string[];
}

export interface QueryParams {
  /** Indicates the page beginning */
  start?: number;

  /** Indicates the page size, if this param is null then its take as value 20. */
  size?: number;

  /** String to look for in the list, you can search by differents the object's properties. */
  q?: string;

  /** The return array of the function will be sorted by this attribute */
  orderBy?: string;

  /** Indicates if the list will be ordered to way ascendant (ASC) or descendant (DESC) */
  orderType?: OrderType;
}

export enum OrderType { ASC = 'ASC', DESC = 'DESC' }

export interface QueryResult<T> {
  total: number;
  items: Array<T>;
}

abstract class GenericHttpService {

  abstract get endpoint(): string;

  get url(): string {
    return AppSettings.getApiEndpoint(this.endpoint);
  }

  protected handleError(error: any) {
    console.error(error.message, error);
    return Observable.throw(error);
  }

}

export abstract class HttpService<T> extends GenericHttpService {

  constructor(private _http: HttpClient) { super(); }

  get(queryParams?: QueryParams): Observable<QueryResult<T> | T[]> {
    let params = new HttpParams();
    for (const key in queryParams) {
      if (queryParams.hasOwnProperty(key)) {
        const element = queryParams[key];
        params = params.append(key, element);
      }
    }

    return this._http.get<QueryResult<T> | T[]>(this.url, { params: params })
      .pipe(
        tap(console.log),
        catchError(this.handleError)
      );
  }

  getById(id: number): Observable<T> {
    return this._http.get<T>(`${this.url}/${id}`)
      .pipe(
        tap(console.log),
        catchError(this.handleError)
      );
  }

  save(data: T): Observable<T> {
    return this._http.post<T>(this.url, data)
      .pipe(
        tap(console.log),
        catchError(this.handleError)
      );
  }

  update(id: number, data: T): Observable<T> {
    return this._http.put<T>(`${this.url}/${id}`, data)
      .pipe(
        tap(console.log),
        catchError(this.handleError)
      );
  }

  delete(id: number): Observable<T> {
    return this._http.delete<T>(`${this.url}/${id}`)
      .pipe(
        tap(console.log),
        catchError(this.handleError)
      );
  }

}
