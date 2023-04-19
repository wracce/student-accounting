import { Component } from '@angular/core';
import { UserSessionService } from 'src/app/security/services/user-session.service';
import { SearchService } from '../../services/search.service';
import { ThemeService } from '../../services/theme.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  constructor(public themeService:ThemeService, public searchService:SearchService, public userSessionService:UserSessionService){}

}
