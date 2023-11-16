import { CharactersResult } from './../../../modules/public/models/characters.interface';
import { Injectable } from '@angular/core';
import { GenericItemService } from '../generic-item/generic-item.service';
import { HttpClient } from '@angular/common/http';
import { HashStrService } from '../hash/hash-str.service';

@Injectable({
  providedIn: 'root'
})
export class CharacterService extends GenericItemService<CharactersResult> {

  constructor(http: HttpClient, hashStrService: HashStrService) {
    super(http, hashStrService, 'characters');
  }
}
