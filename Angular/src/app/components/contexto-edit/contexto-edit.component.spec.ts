import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContextoEditComponent } from './contexto-edit.component';

describe('ContextoEditComponent', () => {
  let component: ContextoEditComponent;
  let fixture: ComponentFixture<ContextoEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContextoEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContextoEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
