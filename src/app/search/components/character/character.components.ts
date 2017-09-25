import { Component, ChangeDetectionStrategy, Input } from '@angular/core';
import { Character } from '../../../models/character';

@Component({
  selector: 'app-character',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrls: ['character.component.scss'],
  template: `
    <div class="character" *ngIf="character">
      {{ character | json }}
    </div>
  `
})
export class CharacterComponent {
  @Input() character: Character;
}
