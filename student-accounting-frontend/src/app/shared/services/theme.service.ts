import { Injectable } from '@angular/core';

const LIGHT_THEME = 'winter';
const DARK_THEME = 'business';

@Injectable({
  providedIn: 'root',
})
export class ThemeService {
  // private _isDark: boolean = false;

  get isDark(): boolean {
    let str = localStorage.getItem('dark');

    return str === 'true' ? true : false;
  }

  private set isDark(value: boolean) {
    localStorage.setItem('dark', value ? 'true' : 'false');
  }

  changeDark() {
    this.isDark = !this.isDark;
    this.setTheme();
  }

  constructor() {

    if (!localStorage.getItem('dark')) {

      if (window.matchMedia('(prefers-color-scheme: dark)').matches) {

        this.isDark = true;
      } else {
        this.isDark = false;
      }
    }
    this.setTheme();
  }

  private setTheme() {
    document
      .querySelector('html')!
      .setAttribute('data-theme', this.isDark ? DARK_THEME : LIGHT_THEME);
  }
}
