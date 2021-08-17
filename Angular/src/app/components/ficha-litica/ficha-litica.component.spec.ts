import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FichaLiticaComponent } from './ficha-litica.component';

describe('FichaLiticaComponent', () => {
  let component: FichaLiticaComponent;
  let fixture: ComponentFixture<FichaLiticaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FichaLiticaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FichaLiticaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
