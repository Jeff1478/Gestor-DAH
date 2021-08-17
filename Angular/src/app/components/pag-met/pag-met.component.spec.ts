import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PagMetComponent } from './pag-met.component';

describe('PagMetComponent', () => {
  let component: PagMetComponent;
  let fixture: ComponentFixture<PagMetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PagMetComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PagMetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
