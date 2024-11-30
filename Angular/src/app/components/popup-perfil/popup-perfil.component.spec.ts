import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PopupPerfilComponent } from './popup-perfil.component';

describe('PopupPerfilComponent', () => {
  let component: PopupPerfilComponent;
  let fixture: ComponentFixture<PopupPerfilComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PopupPerfilComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PopupPerfilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
