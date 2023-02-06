import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InstituteMembersManagerComponent } from './institute-members-manager.component';

describe('InstituteMembersManagerComponent', () => {
  let component: InstituteMembersManagerComponent;
  let fixture: ComponentFixture<InstituteMembersManagerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InstituteMembersManagerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InstituteMembersManagerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
