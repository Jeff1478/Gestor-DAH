import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FichaMetalComponent } from './ficha-metal.component';

describe('FichaMetalComponent', () => {
  let component: FichaMetalComponent;
  let fixture: ComponentFixture<FichaMetalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FichaMetalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FichaMetalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
