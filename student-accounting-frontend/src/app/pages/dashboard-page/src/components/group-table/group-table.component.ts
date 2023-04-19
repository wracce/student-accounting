import { Component, Input, OnInit } from '@angular/core';
import { UserSessionService } from 'src/app/security/services/user-session.service';
import { Group } from 'src/app/shared/models/group';
import { SearchService } from 'src/app/shared/services/search.service';
import { DashboardPageService } from '../../services/dashboard-page.service';

@Component({
  selector: 'app-group-table',
  templateUrl: './group-table.component.html',
  styleUrls: ['./group-table.component.scss']
})
export class GroupTableComponent implements OnInit {
  @Input()
  group!:Group;

  @Input()
  ind!:number;

  constructor(public dashboardPageService:DashboardPageService, public searchService:SearchService, public userSessionService:UserSessionService) {
    if(!this.group){
      this.group = new Group();
      this.group.id = -1;
      this.group.name = "";
      this.group.students = [];
    }

    if (!this.ind)
      this.ind = 0;
  }
  ngOnInit(): void {
  }


}
