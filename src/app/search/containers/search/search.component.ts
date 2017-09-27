import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { SearchService } from '../../search.service';
import { Character } from '../../../models/character';
import { CharacterStats } from '../../../models/character-stats';
import { Item } from '../../../models/item';

import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';

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

      <div class="character-results" *ngIf="stats$">
        <img (click)="clearResults()" src="/assets/close.png" alt="close button">
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

  stats$: Observable<any>;
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
    const { name, realm } = this.form.value;
    this.stats$ = this.search.getStats(name, realm).catch(err => {
      return of({ empty: true });
    });
    this.items$ = this.search.getEquipment(name, realm).catch(err => {
      return of({ empty: true });
    });
  }

  clearResults() {
    this.form.reset();
    this.stats$ = null;
  }
}
