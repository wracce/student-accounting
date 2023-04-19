import { Component, Input } from '@angular/core';
import { UserSessionService } from 'src/app/security/services/user-session.service';
import { Student } from 'src/app/shared/models/student';
import { DashboardPageService } from '../../services/dashboard-page.service';

@Component({
  selector: '[app-student-row]',
  templateUrl: './student-row.component.html',
  styleUrls: ['./student-row.component.scss']
})
export class StudentRowComponent {
  @Input()
  student!: Student;
  @Input()
  ind!: number;
  @Input()
  indGroup!: number;

  constructor(public dashboardPageService:DashboardPageService, public userSessionService:UserSessionService) {
    if (!this.ind)
      this.ind = 0;

    if (!this.student) {
      this.student = new Student();
      this.student.id = 0;
      this.student.name = "";
      this.student.birthdate = new Date();
      this.student.number = 0;

    }
  }

}
