import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CeramicsComponent } from './ceramics.component';

describe('CeramicsComponent', () => {
  let component: CeramicsComponent;
  let fixture: ComponentFixture<CeramicsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CeramicsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CeramicsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
