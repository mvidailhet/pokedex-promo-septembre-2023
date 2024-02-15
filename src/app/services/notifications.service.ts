import { Injectable } from '@angular/core';

export type NotificationType = 'danger' | 'success';

export interface Notification {
  message: string;
  type: NotificationType;
}

@Injectable({
  providedIn: 'root'
})
export class NotificationsService {
  currentNotification?: Notification;

  showNotification(message: string, type: NotificationType) {
    this.currentNotification = {
      message,
      type,
    };
    setTimeout(() => {
      this.currentNotification = undefined;
    }, 3000);
  }
}
