
import {catchError} from 'rxjs/operators';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { SearchService } from '../../search.service';

import { Observable ,  of } from 'rxjs';



import { Stats } from '../../../models/character-stats';
import { Items } from '../../../models/character-items';
import { Realm } from '../../../models/realms';

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
        <select *ngIf="realms$ | async as realms"
          formControlName="realm">
          <option value="" selected>Select a realm</option>
          <option *ngFor="let realm of realms" [value]="realm.name">{{realm.name}}</option>
        </select>
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

  stats$: Observable<Stats | {}>;
  items$: Observable<Items | {}>;
  realms$: Observable<Realm[]>;

  constructor(private fb: FormBuilder, private search: SearchService) {}

  ngOnInit() {
    this.createForm();
    this.realms$ = this.search.getRealms();
  }

  createForm() {
    this.form = this.fb.group({
      name: ['', Validators.required],
      realm: ['', Validators.required]
    });
  }

  onSubmit() {
    const { name, realm } = this.form.value;
    this.stats$ = this.search.getStats(name, realm).pipe(catchError(err => {
      return of({ empty: true });
    }));
    this.items$ = this.search.getEquipment(name, realm).pipe(catchError(err => {
      return of({ empty: true });
    }));
  }

  clearResults() {
    this.form.reset();
    this.stats$ = null;
  }
}
