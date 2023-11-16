import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComicSearchInputComponent } from './comic-search-input.component';

describe('ComicSearchInputComponent', () => {
  let component: ComicSearchInputComponent;
  let fixture: ComponentFixture<ComicSearchInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ComicSearchInputComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ComicSearchInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
