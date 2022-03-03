import { Component } from '@angular/core';

@Component({
  selector: 'app-sender',
  templateUrl: './sender.component.html',
})
export class SenderComponent {
  message = '';

  send() {
    console.log(`Sendning message: '${this.message}'`);
  }
}
