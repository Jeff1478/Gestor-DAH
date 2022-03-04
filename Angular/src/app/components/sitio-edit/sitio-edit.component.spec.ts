import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SitioEditComponent } from './sitio-edit.component';

describe('SitioEditComponent', () => {
  let component: SitioEditComponent;
  let fixture: ComponentFixture<SitioEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SitioEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SitioEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
