import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-entry-data',
  imports: [FormsModule],
  standalone: true,
  templateUrl: './entry-data.component.html',
  styleUrls: ['./entry-data.component.css'],
})
export class EntryDataComponent {
  'placeholder': string = 'email';
  'placepass': string = 'senha';
}
