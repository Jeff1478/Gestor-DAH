import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PagLiteSitiosComponent } from './pag-lite-sitios.component';

describe('PagLiteSitiosComponent', () => {
  let component: PagLiteSitiosComponent;
  let fixture: ComponentFixture<PagLiteSitiosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PagLiteSitiosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PagLiteSitiosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
