import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PagOriComponent } from './pag-ori.component';

describe('PagOriComponent', () => {
  let component: PagOriComponent;
  let fixture: ComponentFixture<PagOriComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PagOriComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PagOriComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
