import { CharacterService } from '../../../../../shared/services/character/character.service';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchInputComponent } from '../../../../../shared/components/search-input/search-input.component';
import { Character, CharactersResult } from '../../../models/characters.interface';
import { FormsModule } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-character-search-input',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: '../../../../../shared/components/search-input/search-input.component.html',
  styleUrl: '../../../../../shared/components/search-input/search-input.component.css'
})
export class CharacterSearchInputComponent extends SearchInputComponent<CharactersResult, Character> {

  constructor(characterService: CharacterService, toastrService: ToastrService){
    super(characterService, toastrService);
  }

}
