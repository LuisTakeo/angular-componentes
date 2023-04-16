import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { MenuComponent } from './components/menu.component';
import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [MenuComponent, AppComponent, HelloComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
