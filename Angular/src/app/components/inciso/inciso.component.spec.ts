import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IncisoComponent } from './inciso.component';

describe('IncisoComponent', () => {
  let component: IncisoComponent;
  let fixture: ComponentFixture<IncisoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IncisoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IncisoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
