import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MapaOrigenesComponent } from './mapa-origenes.component';

describe('MapaOrigenesComponent', () => {
  let component: MapaOrigenesComponent;
  let fixture: ComponentFixture<MapaOrigenesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MapaOrigenesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MapaOrigenesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
