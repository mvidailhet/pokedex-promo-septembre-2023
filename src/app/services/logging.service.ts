import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoggingService {

  logText(text: string) {
    console.log(`LOG: ${text}`);
  }
}
