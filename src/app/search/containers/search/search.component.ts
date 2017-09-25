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

@Component({
  selector: 'app-search',
  styleUrls: ['search.component.scss'],
  template: `
    <div>
      <form [formGroup]="form" (ngSubmit)="onSubmit()">
        <input
          type="text"
          placeholder="Character"
          formControlName="character">
        <input
          type="text"
          placeholder="Realm"
          formControlName="realm">
        <button type="submit"
          [disabled]="form.invalid">Search</button>
      </form>

      <app-character [character]="char$ | async"></app-character>
    </div>
  `
})
export class SearchInputComponent implements OnInit {
  form: FormGroup;
  char$: Observable<Character>;

  constructor(private fb: FormBuilder, private search: SearchService) {}

  ngOnInit() {
    this.createForm();
  }

  createForm() {
    this.form = this.fb.group({
      character: ['', Validators.required],
      realm: ['', Validators.required]
    });
  }

  onSubmit() {
    const { character, realm } = this.form.value;
    this.char$ = this.search.getCharacter(character, realm);
  }
}
