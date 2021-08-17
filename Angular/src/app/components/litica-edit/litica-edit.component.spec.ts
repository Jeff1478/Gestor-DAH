import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LiticaEditComponent } from './litica-edit.component';

describe('LiticaEditComponent', () => {
  let component: LiticaEditComponent;
  let fixture: ComponentFixture<LiticaEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LiticaEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LiticaEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
