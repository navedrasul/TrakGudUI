import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { DItem } from '../api-models/api-models';
import { LoggerService } from './logger.service';

import { ModelToApi } from "./model-to-api";

@Injectable({
  providedIn: 'root'
})
export class TgApiService {

  API_URL = 'https://localhost:5001/api/';

  constructor(
    private http: HttpClient,
    private logger: LoggerService
  ) { }

  getAll<T>(typeName: string): Observable<T[]> {
    const targetUrl = this.API_URL + ModelToApi[typeName];
    console.log('Getting data from URL: ' + targetUrl + ' ...');
    return this.http.get<T[]>(targetUrl)
      .pipe(
        catchError(err => {

          // TODO: send the error to remote logging infrastructure
          this.logger.error(err); // log to console instead

          // TODO: better job of transforming error for user consumption
          this.logger.log(`getById failed: ${err.message}`);

          // Let the app keep running by returning an empty result.
          return of([] as T[]);
        })
      );
  }

  getAllWithParams<T>(typeName: string, params: HttpParams): Observable<T[]> {
    const targetUrl = this.API_URL + ModelToApi[typeName];
    console.log('Getting data from URL: ' + targetUrl + ' ...');
    return this.http.get<T[]>(
      targetUrl,
      { params }
    )
      .pipe(
        catchError(err => {

          // TODO: send the error to remote logging infrastructure
          this.logger.error(err); // log to console instead

          // TODO: better job of transforming error for user consumption
          this.logger.log(`getById failed: ${err.message}`);

          // Let the app keep running by returning an empty result.
          return of([] as T[]);
        })
      );
  }

  getById<T>(typeName: string, id: number): Observable<T> {
    const targetUrl = this.API_URL + ModelToApi[typeName] + '/' + id;
    console.log('Getting data from URL: ' + targetUrl + ' ...');
    return this.http.get<T>(targetUrl)
      .pipe(
        catchError(err => {

          // TODO: send the error to remote logging infrastructure
          this.logger.error(err); // log to console instead

          // TODO: better job of transforming error for user consumption
          this.logger.log(`getById failed: ${err.message}`);

          // Let the app keep running by returning an empty result.
          return of({} as T);
        })
      );
  }

  getByIdWithParams<T>(typeName: string, id: number, params: HttpParams): Observable<T> {
    const targetUrl = this.API_URL + ModelToApi[typeName] + '/' + id;
    console.log('Getting data from URL: ' + targetUrl + ' ...');
    return this.http.get<T>(
      targetUrl,
      { params }
    )
      .pipe(
        catchError(this.apiErrorHandler)
      );
  }

  private apiErrorHandler<T>(err: any, caught: Observable<T>): Observable<T> {

  // TODO: send the error to remote logging infrastructure
  this.logger.error(err); // log to console instead

  // TODO: better job of transforming error for user consumption
  this.logger.log(`getById failed: ${err.message}`);

  // Let the app keep running by returning an empty result.
  return of({} as T);
}

  /**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  private handleError<T>(operation = 'operation', result?: T): any {
    return (err: any) => {

      // TODO: send the error to remote logging infrastructure
      console.error(err); // log to console instead

      // TODO: better job of transforming error for user consumption
      this.logger.log(`${operation} failed: ${err.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
}
