import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Items } from '../../../models/character-items';
import { Stats } from '../../../models/character-stats';
import { Realm } from '../../../models/realms';
import { SearchService } from '../../search.service';

@Component({
  selector: 'app-search',
  styleUrls: ['search.component.scss'],
  templateUrl: 'search.component.html',
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
      realm: ['', Validators.required],
    });
  }

  onSubmit() {
    const { name, realm } = this.form.value;
    this.stats$ = this.search.getStats(name, realm).pipe(
      catchError(err => {
        return of({ empty: true });
      })
    );
    this.items$ = this.search.getEquipment(name, realm).pipe(
      catchError(err => {
        return of({ empty: true });
      })
    );
  }

  clearResults() {
    this.form.reset();
    this.stats$ = null;
  }
}
