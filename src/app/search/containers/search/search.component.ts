import { Component, OnInit } from '@angular/core';
import {
  FormControl,
  FormGroup,
  FormBuilder,
  Validators
} from '@angular/forms';
import { SearchService } from '../../search.service';
import { Observable } from 'rxjs/Observable';
import { Character } from '../../../models/character';
import { CharacterStats } from '../../../models/character-stats';
import { Item } from '../../../models/item';

import 'rxjs/add/operator/map';

@Component({
  selector: 'app-search',
  styleUrls: ['search.component.scss'],
  template: `
    <div>
      <form [formGroup]="form" (ngSubmit)="onSubmit()">
        <input
          type="text"
          placeholder="Character"
          formControlName="name">
        <input
          type="text"
          placeholder="Realm"
          formControlName="realm">
        <button type="submit"
          [disabled]="form.invalid">Search</button>
      </form>

      <div class="character-results" *ngIf="searching">
        <app-character-stats
          [stats]="stats$ | async">
        </app-character-stats>
        <app-character-items
          [items]="items$ | async">
        </app-character-items>
      </div>

    </div>
  `
})
export class SearchInputComponent implements OnInit {
  form: FormGroup;
  searching = false;

  stats$: Observable<CharacterStats>;
  items$: Observable<any>;

  constructor(private fb: FormBuilder, private search: SearchService) {}

  ngOnInit() {
    this.createForm();
  }

  createForm() {
    this.form = this.fb.group({
      name: ['', Validators.required],
      realm: ['', Validators.required]
    });
  }

  onSubmit() {
    this.searching = true;
    const { name, realm } = this.form.value;
    this.stats$ = this.search.getStats(name, realm);
    this.items$ = this.search
      .getEquipment(name, realm)
      .map(character => character.items);
  }
}
