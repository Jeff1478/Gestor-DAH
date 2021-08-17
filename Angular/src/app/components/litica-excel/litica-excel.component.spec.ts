import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LiticaExcelComponent } from './litica-excel.component';

describe('LiticaExcelComponent', () => {
  let component: LiticaExcelComponent;
  let fixture: ComponentFixture<LiticaExcelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LiticaExcelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LiticaExcelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
