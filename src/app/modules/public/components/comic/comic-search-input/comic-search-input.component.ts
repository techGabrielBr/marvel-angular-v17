import { Comic, ComicsResult } from './../../../models/comics.interface';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SearchInputComponent } from '../../../../../shared/components/search-input/search-input.component';
import { ComicService } from '../../../../../shared/services/comic/comic.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-comic-search-input',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: '../../../../../shared/components/search-input/search-input.component.html',
  styleUrl: '../../../../../shared/components/search-input/search-input.component.css'
})
export class ComicSearchInputComponent extends SearchInputComponent<ComicsResult, Comic> {
  constructor(comicsService: ComicService, toastrService: ToastrService){
    super(comicsService, toastrService);
  }
}
