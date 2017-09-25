import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-logo',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrls: ['./logo.component.scss'],
  templateUrl: './logo.component.html'
})
export class LogoComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
