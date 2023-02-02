import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InstituteAdminPageComponent } from './institute-admin-page.component';

describe('InstituteAdminPageComponent', () => {
  let component: InstituteAdminPageComponent;
  let fixture: ComponentFixture<InstituteAdminPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InstituteAdminPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InstituteAdminPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
