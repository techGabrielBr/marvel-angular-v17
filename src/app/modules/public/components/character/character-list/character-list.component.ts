import { Component, signal } from '@angular/core';
import { Character, CharactersResult } from '../../../models/characters.interface';
import { ToastrService } from 'ngx-toastr';
import { CharacterService } from '../../../../../shared/services/character/character.service';
import { GenericItemList } from '../../../../../shared/components/generic-item-list/generic-item-list.component';
import { CommonModule } from '@angular/common';
import { CharacterSearchInputComponent } from '../character-search-input/character-search-input.component';

@Component({
  selector: 'app-character-list',
  standalone: true,
  imports: [CommonModule, CharacterSearchInputComponent],
  templateUrl: './character-list.component.html',
  styleUrl: './character-list.component.css'
})
export class CharacterListComponent extends GenericItemList<CharactersResult, Character>{
  constructor(characterService: CharacterService, toastrService: ToastrService){
    super(characterService, toastrService);
  }
}
