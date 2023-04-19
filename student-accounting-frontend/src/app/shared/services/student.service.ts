import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.development';
import { Student } from '../models/student';
import { StaticDataService } from './static-data.service';

const BASE_URL = environment.API_URL + "/api/v2/students";


@Injectable({
  providedIn: 'root'
})
export class StudentService {

  constructor(private httpClient:HttpClient) { }

  delete(id:number):Observable<any> {
    return this.httpClient.delete(BASE_URL + "/" + id);
  }

  edit(student:Student):Observable<Student> {
    return this.httpClient.put<Student>(BASE_URL,student);

  }
}
