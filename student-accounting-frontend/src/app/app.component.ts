import { Component } from '@angular/core';
import { AllertService } from './shared/services/allert.service';
import { ThemeService } from './shared/services/theme.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'VuzFrontend';

  constructor(public themeService :ThemeService, public allertService:AllertService) {

  }
}
