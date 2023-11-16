import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HashStrService } from '../hash/hash-str.service';
import { ComicsResult } from '../../../modules/public/models/comics.interface';
import { GenericItemService } from '../generic-item/generic-item.service';

@Injectable({
  providedIn: 'root'
})
export class ComicService extends GenericItemService<ComicsResult> {

  constructor(http: HttpClient, hashStrService: HashStrService) {
    super(http, hashStrService, 'comics');
  }
}
