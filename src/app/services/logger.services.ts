import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class Logger {
  log(message: string) {
    console.log(message);
  }
  error(message: string) {
    console.log(message);
  }
}
