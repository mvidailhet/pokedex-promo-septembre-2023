import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'my-pokedex';
  userInput = 'coucou';

  isAddBtnDisabled = false;

  constructor() {
    setTimeout(() => {
      this.isAddBtnDisabled = true;
    }, 3000);
  }

}
