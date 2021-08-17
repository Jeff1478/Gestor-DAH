import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LiticoComponent } from './litico.component';

describe('LiticoComponent', () => {
  let component: LiticoComponent;
  let fixture: ComponentFixture<LiticoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LiticoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LiticoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
