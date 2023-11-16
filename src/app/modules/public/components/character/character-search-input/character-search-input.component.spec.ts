import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CharacterSearchInputComponent } from './character-search-input.component';

describe('CharacterSearchInputComponent', () => {
  let component: CharacterSearchInputComponent;
  let fixture: ComponentFixture<CharacterSearchInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CharacterSearchInputComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CharacterSearchInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
