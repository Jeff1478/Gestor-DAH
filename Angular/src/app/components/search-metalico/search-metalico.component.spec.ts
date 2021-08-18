import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchMetalicoComponent } from './search-metalico.component';

describe('SearchMetalicoComponent', () => {
  let component: SearchMetalicoComponent;
  let fixture: ComponentFixture<SearchMetalicoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchMetalicoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchMetalicoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
