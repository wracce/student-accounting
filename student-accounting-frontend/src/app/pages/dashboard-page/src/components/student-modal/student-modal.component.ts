import { Component } from '@angular/core';
import { DashboardPageComponent } from '../../../dashboard-page.component';
import { DashboardPageService } from '../../services/dashboard-page.service';

@Component({
  selector: 'app-student-modal',
  templateUrl: './student-modal.component.html',
  styleUrls: ['./student-modal.component.scss']
})
export class StudentModalComponent {

  constructor(public dashboardPageService:DashboardPageService) {}
}
