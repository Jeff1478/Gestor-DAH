import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MetalEditComponent } from './metal-edit.component';

describe('MetalEditComponent', () => {
  let component: MetalEditComponent;
  let fixture: ComponentFixture<MetalEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MetalEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MetalEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
