import { Component, OnDestroy } from '@angular/core';
import { NbThemeService } from '@nebular/theme';

@Component({
  selector: 'ngx-kitten',
  styleUrls: ['./kitten.component.scss'],
  templateUrl: './kitten.component.html',
})
export class KittenComponent implements OnDestroy {

  currentTheme: string;
  themeSubscription: any;

  constructor() {
    this.currentTheme = 'default';
  }

  ngOnDestroy() {
    this.themeSubscription.unsubscribe();
  }
}
