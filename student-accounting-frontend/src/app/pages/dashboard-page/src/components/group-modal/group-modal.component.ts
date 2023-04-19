import { Component } from '@angular/core';
import { DashboardPageService } from '../../services/dashboard-page.service';

@Component({
  selector: 'app-group-modal',
  templateUrl: './group-modal.component.html',
  styleUrls: ['./group-modal.component.scss']
})
export class GroupModalComponent {
  constructor(public dashboardPageService:DashboardPageService) {}
}
