import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/components/header/header.component';
import { DashboardPageComponent } from './pages/dashboard-page/dashboard-page.component';
import { IconsModule } from '@amithvns/ng-heroicons';
import { NgIconsModule } from '@ng-icons/core';
import { heroMoonSolid, heroSunSolid, heroXMarkSolid,heroPencilSolid,heroTrashSolid , heroPlusSolid, heroFolderPlusSolid, heroUserPlusSolid, heroUserMinusSolid, heroPencilSquareSolid} from '@ng-icons/heroicons/solid';
import { GroupTableComponent } from './pages/dashboard-page/src/components/group-table/group-table.component';
import { StudentRowComponent } from './pages/dashboard-page/src/components/student-row/student-row.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { StudentModalComponent } from './pages/dashboard-page/src/components/student-modal/student-modal.component';
import { GroupModalComponent } from './pages/dashboard-page/src/components/group-modal/group-modal.component';
import { StudentsFilterPipe } from './pages/dashboard-page/src/pipes/students-filter.pipe';
import localeRu from '@angular/common/locales/ru';
import { registerLocaleData } from '@angular/common';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { HttpClient, HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { BasicAuthInterceptor } from './security/basic-auth.interceptor';


registerLocaleData(localeRu, 'ru');
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    DashboardPageComponent,
    GroupTableComponent,
    StudentRowComponent,
    StudentModalComponent,
    GroupModalComponent,
    StudentsFilterPipe,
    LoginPageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    IconsModule,
    NgIconsModule.withIcons({heroMoonSolid, heroSunSolid,heroXMarkSolid,heroPencilSolid,heroTrashSolid , heroPlusSolid, heroFolderPlusSolid, heroUserPlusSolid, heroUserMinusSolid, heroPencilSquareSolid}),
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [{ provide: HTTP_INTERCEPTORS, useClass: BasicAuthInterceptor, multi: true },],
  bootstrap: [AppComponent]
})
export class AppModule { }
