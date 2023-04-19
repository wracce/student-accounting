import { Injectable } from '@angular/core';
import { max, Observable, of } from 'rxjs';
import { Group } from '../models/group';
import { Student } from '../models/student';

const GROUPS_DATA_COOKIES = 'static-data-groups';

@Injectable({
  providedIn: 'root',
})
export class StaticDataService {
  private get groups(): Group[] {
    let str = localStorage.getItem(GROUPS_DATA_COOKIES);

    return str ? (JSON.parse(str) as Group[]) : [];
  }

  private set groups(value: Group[]) {
    localStorage.setItem(GROUPS_DATA_COOKIES, JSON.stringify(value));
  }

  constructor() {
    if (localStorage.getItem(GROUPS_DATA_COOKIES)) {
      return;
    }

    let groups1: Group[] = [];
    let group!: Group, student!: Student;
    group = new Group();
    group.id = 0;
    group.name = '7201-040303D';
    group.students = [];
    student = new Student();
    student.id = 0;
    student.name = 'Васечкин Игорь Сергеевич';
    student.birthdate = new Date(2000, 5, 12);
    student.number = 176;
    group.students.push(student);
    student = new Student();
    student.id = 1;
    student.name = 'Нарыжкин Виктор Степанович';
    student.birthdate = new Date(2003, 9, 4);
    student.number = 190;
    group.students.push(student);
    student = new Student();
    student.id = 2;
    student.name = 'Гогемов Солнце Валентинович';
    student.birthdate = new Date(1999, 12, 28);
    student.number = 159;
    group.students.push(student);
    groups1.push(group);

    group = new Group();
    group.id = 1;
    group.name = '2304-050703D';
    group.students = [];
    student = new Student();
    student.id = 3;
    student.name = 'Борисова Барбориса Борисовна';
    student.birthdate = new Date(2006, 12, 10);
    student.number = 163;
    group.students.push(student);
    student = new Student();
    student.id = 4;
    student.name = 'Кадзимов Кузя Алексеевич';
    student.birthdate = new Date(2005, 10, 14);
    student.number = 157;
    group.students.push(student);
    student = new Student();
    student.id = 5;
    student.name = 'Толстов Луи Николаевич';
    student.birthdate = new Date(1996, 5, 12);
    student.number = 184;
    group.students.push(student);
    groups1.push(group);
    this.groups = groups1;
  }

  public getGroups(): Observable<Group[]> {
    return of(this.groups);
  }

  public createGroup(group: Group): Observable<Group> {
    return new Observable((obs) => {
      let grs = this.groups;
      let gr = new Group();
      gr.id = grs.reduce((max, g) => (g.id! > max.id! ? g : max)).id! + 1;
      gr.name = group.name;
      gr.students = [];

      this.groups = [...grs, gr];
      obs.next(gr);
    });
  }

  public deleteGroup(id: number): Observable<any> {
    console.log(id);
    return new Observable((obs) => {
      let grs = this.groups;
      let index = grs.findIndex((g) => g.id === id);

      if (index === -1) {
        obs.error('index not found');
        return;
      }

      grs.splice(index, 1);
      this.groups = grs;

      obs.next(1);
    });
  }

  public editGroup(group: Group): Observable<Group> {
    return new Observable((obs) => {
      let grs = this.groups;
      let gr = grs.find((g) => g.id === group.id);

      if (!gr) {
        obs.error('group not found');
        throw new Error('group not found');
      }

      gr.name = group.name;

      this.groups = grs;

      obs.next(gr);
    });
  }

  public createStudent(student: Student, groupId: number): Observable<Student> {
    return new Observable((obs) => {
      let grs = this.groups;
      let gr = grs.find((g) => g.id == groupId);

      if (!gr) {
        obs.error('group not found');
        throw new Error('group not found');
      }

      let st = new Student();
      st.birthdate = student.birthdate;
      st.name = student.name;
      st.number = student.number;

      let maxId = 0;
      grs.forEach((g) =>
        g.students!.forEach((s) => {
          if (s.id! > maxId) maxId = s.id!;
        })
      );
      student.id = maxId + 1;

      gr.students?.push(st);

      this.groups = grs;
      obs.next(st);
    });
  }

  public editStudent(student: Student): Observable<Student> {
    return new Observable((obs) => {
      let grs = this.groups;
      let st: Student | undefined;

      grs.forEach((g) => {
        st = g.students?.find((s) => s.id === student.id);
      });

      if (!st) {
        obs.error('student not found');
        throw new Error('student not found');
      }

      st.name = student.name;
      st.birthdate = student.birthdate;
      st.number = student.number;

      this.groups = grs;

      obs.next(st);
    });
  }

  public deleteStudent(studentId: number): Observable<any> {
    return new Observable((obs) => {
      let grs = this.groups;
      let stId: number = -1;

      let gr = grs.find((g) => {
        stId = g.students!.findIndex((s) => s.id === studentId);
        console.log(stId);
        return stId != -1 ;
      });

      if (stId ==-1) {
        obs.error('student not found');
        throw new Error('student not found');
      }

      if (!gr) {
        obs.error('group not found');
        throw new Error('group not found');
      }

      gr.students?.splice(stId, 1);

      this.groups = grs;

      obs.next(1);
    });
  }
}
