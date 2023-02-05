import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClassMembersManagerComponent } from './class-members-manager.component';

describe('ClassMembersManagerComponent', () => {
  let component: ClassMembersManagerComponent;
  let fixture: ComponentFixture<ClassMembersManagerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClassMembersManagerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClassMembersManagerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
