import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PagLitComponent } from './pag-lit.component';

describe('PagLitComponent', () => {
  let component: PagLitComponent;
  let fixture: ComponentFixture<PagLitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PagLitComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PagLitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
