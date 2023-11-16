import { Injectable } from '@angular/core';
import { GenericItemService } from '../generic-item/generic-item.service';
import { SeriesResult } from '../../../modules/public/models/series.interface';
import { HttpClient } from '@angular/common/http';
import { HashStrService } from '../hash/hash-str.service';

@Injectable({
  providedIn: 'root'
})
export class SerieService extends GenericItemService<SeriesResult> {

  constructor(http: HttpClient, hashStrService: HashStrService) {
    super(http, hashStrService, 'series');
  }
}
