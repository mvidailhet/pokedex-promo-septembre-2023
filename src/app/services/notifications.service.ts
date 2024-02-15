import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NotificationsService {
  isPokemonAdded = false;
  isPokemonDeleted = false;

  showAddedPokemonNotif() {
    this.isPokemonAdded = true;
    setTimeout(() => {
      this.isPokemonAdded = false;
    }, 3000);
  }

  showDeletedPokemonNotif() {
    this.isPokemonDeleted = true;
    setTimeout(() => {
      this.isPokemonDeleted = false;
    }, 3000);
  }
}
