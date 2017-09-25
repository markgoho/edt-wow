import { Component, OnChanges, Input, SimpleChanges } from '@angular/core';
import { SearchService } from '../../search.service';
import { CharacterQuery } from '../../../models/queries';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-character',
  styleUrls: ['character.component.scss'],
  template: `
    <div class="character" *ngIf="character">
      <app-character-stats></app-character-stats>
      <app-character-items></app-character-items>
    </div>
  `
})
export class CharacterComponent implements OnChanges {
  @Input() character: Observable<CharacterQuery>;
  constructor(private search: SearchService) {}
}
