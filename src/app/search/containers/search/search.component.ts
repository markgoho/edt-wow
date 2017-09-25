import { Component, OnInit, Output, EventEmitter } from '@angular/core';
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
          formControlName="name">
        <input
          type="text"
          placeholder="Realm"
          formControlName="realm">
        <button type="submit"
          [disabled]="form.invalid">Search</button>
      </form>
    </div>
  `
})
export class SearchInputComponent implements OnInit {
  form: FormGroup;

  @Output() query = new EventEmitter<any>();

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
    this.query.emit(this.form.value);
  }
}
