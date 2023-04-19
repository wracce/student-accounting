import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentModalComponent } from './student-modal.component';

describe('StudentModalComponent', () => {
  let component: StudentModalComponent;
  let fixture: ComponentFixture<StudentModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StudentModalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StudentModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
