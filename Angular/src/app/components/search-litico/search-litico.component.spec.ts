import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchLiticoComponent } from './search-litico.component';

describe('SearchLiticoComponent', () => {
  let component: SearchLiticoComponent;
  let fixture: ComponentFixture<SearchLiticoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchLiticoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchLiticoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
