import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InstitutePageComponent } from './institute-page.component';

describe('InstitutePageComponent', () => {
  let component: InstitutePageComponent;
  let fixture: ComponentFixture<InstitutePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InstitutePageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InstitutePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
