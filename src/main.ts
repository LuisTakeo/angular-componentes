import 'zone.js/dist/zone';
import { Component, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { bootstrapApplication } from '@angular/platform-browser';

import { AppComponent } from './app/app.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, AppComponent],
  template: `<app-component></app-component>`,
})
export class App {}

bootstrapApplication(App);
