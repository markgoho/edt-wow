import { Component, OnChanges, Input, SimpleChanges } from '@angular/core';
import { SearchService } from '../../search.service';
import { CharacterQuery } from '../../../models/queries';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-character',
  styleUrls: ['character.component.scss'],
  template: `
    <div class="character" *ngIf="character">
      <ng-content select="app-character-stats"></ng-content>
      <ng-content select="app-character-items"></ng-content>
    </div>
  `
})
export class CharacterComponent {
  @Input() character: Observable<CharacterQuery>;
  constructor(private search: SearchService) {}
}
