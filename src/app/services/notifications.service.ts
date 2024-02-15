import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NotificationsService {
  message?: string;
  type?: 'danger' | 'success';

  showNotification(message: string, type: 'danger' | 'success') {
    this.message = message;
    this.type = type;
    setTimeout(() => {
      this.message = undefined;
    }, 3000);
  }
}
