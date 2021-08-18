import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MetalExcelComponent } from './metal-excel.component';

describe('MetalExcelComponent', () => {
  let component: MetalExcelComponent;
  let fixture: ComponentFixture<MetalExcelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MetalExcelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MetalExcelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
