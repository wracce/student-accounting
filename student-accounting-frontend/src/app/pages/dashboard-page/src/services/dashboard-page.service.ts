import { group } from '@angular/animations';
import { formatDate } from '@angular/common';
import { Injectable } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Group } from 'src/app/shared/models/group';
import { Student } from 'src/app/shared/models/student';
import { GroupService } from 'src/app/shared/services/group.service';
import { StudentService } from 'src/app/shared/services/student.service';

@Injectable({
  providedIn: 'root',

})
export class DashboardPageService {
  private _groups: Group[] = [];
  private _isEditGroup: boolean = false;
  private _isEditStudent: boolean = false;
  private _selectedStudentIndex: number = -1;
  private _selectedGroupIndex: number = -1;
  private _groupForm = new FormGroup({
    name: new FormControl('', Validators.required),
  });
  private _studentForm = new FormGroup({
    name: new FormControl('', Validators.required),
    birthdate: new FormControl(formatDate(new Date(),'yyyy-MM-dd','en'), Validators.required),
    number: new FormControl(0, Validators.required),
  });

  public get selectedStudentIndex(): number {
    return this._selectedStudentIndex;
  }
  public set selectedStudentIndex(value: number) {
    this._selectedStudentIndex = value;
  }
  public get selectedGroupIndex(): number {
    return this._selectedGroupIndex;
  }
  public set selectedGroupIndex(value: number) {
    this._selectedGroupIndex = value;
  }
  public get studentForm() {
    return this._studentForm;
  }
  public set studentForm(value) {
    this._studentForm = value;
  }
  public get isEditStudent(): boolean {
    return this._isEditStudent;
  }
  public set isEditStudent(value: boolean) {
    this._isEditStudent = value;
  }
  public get isEditGroup(): boolean {
    return this._isEditGroup;
  }
  public set isEditGroup(value: boolean) {
    this._isEditGroup = value;
  }
  public get groupForm(): FormGroup {
    return this._groupForm;
  }
  get groups(): Group[] {
    return this._groups;
  }

  constructor(
    private groupService: GroupService,
    private studentService: StudentService
  ) {
    this.receiveGroups();
  }

  receiveGroups() {
    this.groupService.getAll().subscribe({ next: (g) => (this._groups = g) });
  }

  createGroup() {
    let group = new Group();
    group.name = this.groupForm.value.name;
    group.id = -1;
    group.students = [];

    this.groupService
      .create(group)
      .subscribe({ next: (g) => this._groups.push(g) });
  }

  deleteGroup() {
    let index = this._selectedGroupIndex;
    let id = this._groups[index].id;

    if (id !== undefined)
      this.groupService.delete(id).subscribe(() => {
        this._groups.splice(index, 1);
        this._groups = [...this._groups];
      });
  }

  editGroup() {
    let group = this.groups[this._selectedGroupIndex];
    let group1 = new Group();
    group1.name = this.groupForm.value.name;
    group1.id = group.id;
    group1.students = group.students;

    this.groupService.edit(group1).subscribe((g) => {
      group.name = g.name;
    });
  }

  AddStudent() {
    let gp = this._groups[this._selectedGroupIndex];
    let st = new Student();
    st.id = -1;
    st.name = this._studentForm.value.name!;
    st.number = this._studentForm.value.number!;
    st.birthdate = new Date(this._studentForm.value.birthdate!);

    this.groupService
      .addStudent(st, gp.id!)
      .subscribe({ next: (s) => gp.students?.push(s) });
  }

  deleteStudent() {
    console.log(this._groups);

    let group = this._groups[this._selectedGroupIndex];


    let id = group.students![this._selectedStudentIndex].id;
    console.log(this._selectedStudentIndex);
    console.log(this._selectedGroupIndex);
    console.log(id);
    console.log(group);
    if (id !== undefined)
      this.studentService.delete(id).subscribe(() => {
        group.students!.splice(this._selectedStudentIndex, 1);
        group.students = [...group.students!];
      });
  }

  editStudent() {
    let st =
      this.groups[this._selectedGroupIndex].students![
        this.selectedStudentIndex
      ];
    let st1 = new Student();
    st1.id = st.id;
    st1.name = this._studentForm.value.name!;
    st1.number = this._studentForm.value.number!;
    st1.birthdate = new Date(this._studentForm.value.birthdate!);

    this.studentService.edit(st1).subscribe((s) => {
      st.id = s.id;
      st.birthdate = new Date(s.birthdate!);
      st.name = s.name;
      st.number = s.number;
    });
  }

  setGroupModal(b: boolean) {
    (document.getElementById('group-modal') as HTMLInputElement).checked = b;
  }

  setStudentModal(b: boolean) {
    (document.getElementById('student-modal') as HTMLInputElement).checked = b;
  }

  setGroupFormFromGroup(group: Group) {
    this._groupForm.setValue({ name: group.name ? group.name : '' });
    this._groupForm.markAsPristine();
  }

  setStudentFormFromStudent(student: Student) {
    this._studentForm.setValue({
      name: student.name ? student.name : '',
      birthdate: formatDate(new Date(),'yyyy-MM-dd','en'),
      number: student.number != null ? student.number : 0,
    });
    this._studentForm.markAsPristine();
  }
}
