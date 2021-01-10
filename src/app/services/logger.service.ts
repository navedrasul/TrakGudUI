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
    console.log('%cERROR: ', 'color: #f77;');
    console.log(value);
  }

  public errorMessage(message: string): void {
    console.log(`%c${message}`, 'color: #f77;');
  }

  public warningMessage(message: string): void {
    console.log(`%c${message}`, 'color: #f70;');
  }

  public alertMessage(message: string): void {
    console.log(`%c${message}`, 'color: #cc6; padding: 3px; border: dashed 1px #aaa;');
  }
}
