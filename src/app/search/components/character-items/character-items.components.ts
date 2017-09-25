import { Component, ChangeDetectionStrategy, Input } from '@angular/core';

import { Equipment } from '../../../models/equipment';

@Component({
  selector: 'app-character-items',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrls: ['character-items.component.scss'],
  template: `
    <div class="character" *ngIf="equipment">
      {{ equipment | json }}
    </div>
  `
})
export class CharacterItemsComponent {
  @Input() equipment: Equipment;
}
