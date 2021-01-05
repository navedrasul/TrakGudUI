import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoggerService {
  // TODO: Implement an Idb-based logger

  constructor() { }

  public log(value: any): void {
    console.log(value);
  }

  public error(value: any): void {
    console.log('%cERROR: ', 'color: #f77;', value);
  }
}
