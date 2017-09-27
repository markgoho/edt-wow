import { Component, Input } from '@angular/core';
import { CharacterStats } from '../../../models/character-stats';

@Component({
  selector: 'app-character-stats',
  styleUrls: ['character-stats.component.scss'],
  templateUrl: 'character-stats.component.html'
})
export class CharacterStatsComponent {
  @Input() stats: any;

  constructor() {}
}
