import { Component, Input } from '@angular/core';
import { HelloComponent } from './hello.component';
import { MenuComponent } from './components/menu.component';
import { Button } from './components/button.component';
import { EntryDataComponent } from './components/entry-data/entry-data.component';

@Component({
  selector: 'app-component',
  standalone: true,
  imports: [HelloComponent, MenuComponent, Button, EntryDataComponent],
  templateUrl: `app.component.html`,
  styleUrls: [`app.component.css`],
})
export class AppComponent {
  name = 'Takeo';
  fontColor = 'blue';
  canClick = false;
  message = 'Mensagem no butão';
  semSublinhado = 'none';
  buttonLabel: string = 'CARRINHO';
  buttonSecond: string = 'ADICIONAR';

  sayMessage() {
    alert(this.message);
  }
}
