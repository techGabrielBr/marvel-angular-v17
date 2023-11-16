import { SerieService } from './../../../../../shared/services/serie/serie.service';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SearchInputComponent } from '../../../../../shared/components/search-input/search-input.component';
import { Serie, SeriesResult } from '../../../models/series.interface';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-serie-search-input',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: '../../../../../shared/components/search-input/search-input.component.html',
  styleUrl: '../../../../../shared/components/search-input/search-input.component.css'
})
export class SerieSearchInputComponent extends SearchInputComponent<SeriesResult, Serie>{
  constructor(serieService: SerieService, toastrService: ToastrService){
    super(serieService, toastrService);
  }
}
