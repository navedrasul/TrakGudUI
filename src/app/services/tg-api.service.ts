import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { DItem } from '../api-models/api-models';
import { LoggerService } from './logger.service';

import { ModelToApi } from './model-to-api';

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
        catchError(this.apiErrorHandler)
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
        catchError(this.apiErrorHandler)
      );
  }

  getById<T>(typeName: string, id: number): Observable<T> {
    const targetUrl = this.API_URL + ModelToApi[typeName] + '/' + id;
    console.log('Getting data from URL: ' + targetUrl + ' ...');
    return this.http.get<T>(targetUrl)
      .pipe(
        catchError(this.apiErrorHandler)
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

  addSingle(typeName: string, objToAdd: any): Observable<any> {
    const targetUrl = this.API_URL + ModelToApi[typeName];
    console.log('Posting data to URL: ' + targetUrl + ' ...');
    return this.http.post<any>(
      targetUrl,
      objToAdd
    )
      .pipe(
        catchError(this.apiErrorHandler)
      );
  }


  // API Service Error Handler.

  private apiErrorHandler<T>(err: any, caught: Observable<T>): Observable<T> {

    // TODO: send the error to remote logging infrastructure
    this.logger.error(err); // log to console instead

    // TODO: better job of transforming error for user consumption
    this.logger.log(`tgApiService failed: ${err.message}`);

    // Let the app keep running by returning an empty result.
    return of({} as T);
  }
}
