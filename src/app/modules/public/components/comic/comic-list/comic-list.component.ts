import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Comic, ComicsResult } from '../../../models/comics.interface';
import { ComicService } from '../../../../../shared/services/comic/comic.service';
import { ToastrService } from 'ngx-toastr';
import { GenericItemList } from '../../../../../shared/components/generic-item-list/generic-item-list.component';
import { ComicSearchInputComponent } from '../comic-search-input/comic-search-input.component';

@Component({
  selector: 'app-comic-list',
  standalone: true,
  imports: [CommonModule, ComicSearchInputComponent],
  templateUrl: './comic-list.component.html',
  styleUrl: './comic-list.component.css'
})
export class ComicListComponent extends GenericItemList<ComicsResult, Comic>{
  constructor(characterService: ComicService, toastrService: ToastrService){
    super(characterService, toastrService);
  }
}
