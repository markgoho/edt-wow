import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-logo',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrls: ['./logo.component.scss'],
  template: `
    <img src="assets/edt-logo.png" alt="eagle dream technologies logo">
  `
})
export class LogoComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
