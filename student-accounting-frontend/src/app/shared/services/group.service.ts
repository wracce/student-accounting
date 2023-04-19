import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { groupBy, Observable, of } from 'rxjs';
import { environment } from 'src/environments/environment.development';
import { Group } from '../models/group';
import { Student } from '../models/student';
import { StaticDataService } from './static-data.service';

const BASE_URL = environment.API_URL + "/api/v2/groups";

@Injectable({
  providedIn: 'root'
})
export class GroupService {

  constructor(private httpClient:HttpClient) { }

  getAll():Observable<Group[]> {
    return this.httpClient.get<Group[]>(BASE_URL);
  }

  create(group:Group):Observable<Group> {
    console.log(group);

    return this.httpClient.post<Group>(BASE_URL,group);
  }

  delete(id:number):Observable<any> {
    return this.httpClient.delete(BASE_URL+ "/" + id);
  }

  edit(group:Group):Observable<Group> {
    return this.httpClient.put<Group>(BASE_URL,group);

  }

  addStudent(student:Student, groupId:number):Observable<Student> {
    return this.httpClient.post<Group>(BASE_URL +"/" + groupId,student);

  }

}
