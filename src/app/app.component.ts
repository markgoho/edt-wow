import { Component } from '@angular/core';
import { Character } from './models/character';
import { SearchService } from './search/search.service';
import { CharacterQuery } from './models/queries';

@Component({
  selector: 'app-root',
  styleUrls: ['./app.component.scss'],
  template: `
    <app-logo></app-logo>
    <app-search></app-search>
  `
})
export class AppComponent {}
