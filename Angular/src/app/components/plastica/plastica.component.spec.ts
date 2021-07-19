import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlasticaComponent } from './plastica.component';

describe('PlasticaComponent', () => {
  let component: PlasticaComponent;
  let fixture: ComponentFixture<PlasticaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlasticaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PlasticaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
