import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SerieSearchInputComponent } from './serie-search-input.component';

describe('SerieSearchInputComponent', () => {
  let component: SerieSearchInputComponent;
  let fixture: ComponentFixture<SerieSearchInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SerieSearchInputComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SerieSearchInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
