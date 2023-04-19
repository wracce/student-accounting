import { Pipe, PipeTransform } from '@angular/core';
import { Student } from 'src/app/shared/models/student';

@Pipe({
  name: 'studentsFilter'
})
export class StudentsFilterPipe implements PipeTransform {

  transform(students: Student[], search:string): Student[] {
    search = search.trim().toLowerCase();

    if (search.trim() === "") {
      return students;
    }

    return students.filter(v => this.foundSearch(v,search));
  }

  private foundSearch(student: Student, search: string):boolean {
    return student.name?student.name.toLowerCase().includes(search):false;
  }

}
