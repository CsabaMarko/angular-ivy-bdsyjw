import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { LandingComponent } from './feature/landing/landing.component';
import { SenderComponent } from './feature/sender/sender.component';
import { ReceiverComponent } from './feature/receiver/receiver.component';

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [
    AppComponent,
    HelloComponent,
    LandingComponent,
    SenderComponent,
    ReceiverComponent,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
