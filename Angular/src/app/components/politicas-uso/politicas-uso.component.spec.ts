import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PoliticasUsoComponent } from './politicas-uso.component';

describe('PoliticasUsoComponent', () => {
  let component: PoliticasUsoComponent;
  let fixture: ComponentFixture<PoliticasUsoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PoliticasUsoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PoliticasUsoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
