import { Component } from '@angular/core';
import { UserSessionService } from 'src/app/security/services/user-session.service';
import { DashboardPageService } from './src/services/dashboard-page.service';

@Component({
  selector: 'app-dashboard-page',
  templateUrl: './dashboard-page.component.html',
  styleUrls: ['./dashboard-page.component.scss'],
})
export class DashboardPageComponent {
  constructor(public dashboardPageService: DashboardPageService, public userSessionService:UserSessionService) {}
}
