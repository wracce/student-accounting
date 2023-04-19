import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentRowComponent } from './student-row.component';

describe('StudentRowComponent', () => {
  let component: StudentRowComponent;
  let fixture: ComponentFixture<StudentRowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StudentRowComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StudentRowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
