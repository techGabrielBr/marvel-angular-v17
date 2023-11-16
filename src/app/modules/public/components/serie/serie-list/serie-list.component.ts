import { SerieService } from './../../../../../shared/services/serie/serie.service';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GenericItemList } from '../../../../../shared/components/generic-item-list/generic-item-list.component';
import { Serie, SeriesResult } from '../../../models/series.interface';
import { ToastrService } from 'ngx-toastr';
import { SerieSearchInputComponent } from '../serie-search-input/serie-search-input.component';

@Component({
  selector: 'app-serie-list',
  standalone: true,
  imports: [CommonModule, SerieSearchInputComponent],
  templateUrl: './serie-list.component.html',
  styleUrl: './serie-list.component.css'
})
export class SerieListComponent extends GenericItemList<SeriesResult, Serie>{
  constructor(serieService: SerieService, toastrService: ToastrService){
    super(serieService, toastrService);
  }
}
