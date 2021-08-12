import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchContextoComponent } from './search-contexto.component';

describe('SearchContextoComponent', () => {
  let component: SearchContextoComponent;
  let fixture: ComponentFixture<SearchContextoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchContextoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchContextoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
