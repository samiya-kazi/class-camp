import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClassMemberListComponent } from './class-member-list.component';

describe('ClassMemberListComponent', () => {
  let component: ClassMemberListComponent;
  let fixture: ComponentFixture<ClassMemberListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClassMemberListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClassMemberListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
