import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MetalicoComponent } from './metalico.component';

describe('MetalicoComponent', () => {
  let component: MetalicoComponent;
  let fixture: ComponentFixture<MetalicoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MetalicoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MetalicoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
