import { Component, Input } from '@angular/core';

import { CharacterItems } from '../../../models/character-items';

@Component({
  selector: 'app-character-items',
  styleUrls: ['character-items.component.scss'],
  templateUrl: 'character-items.component.html'
})
export class CharacterItemsComponent {
  @Input() items: CharacterItems;
}
