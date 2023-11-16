import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { GenericItemService } from '../../services/generic-item/generic-item.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-search-input',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './search-input.component.html',
  styleUrl: './search-input.component.css'
})
export abstract class SearchInputComponent<T extends {data: {results: U []}}, U> {
  @Output() itemsEmitter = new EventEmitter<U []>();
  @Output() resetEmitter = new EventEmitter<boolean>();

  @Input({required: true}) type!: string;

  constructor(private genericItemService: GenericItemService<T>, private toastrService: ToastrService){}

  str: string = '';

  search(){
    this.genericItemService.getByStr(this.str, this.type).subscribe({
      next: (v: T) => {
        const items = v.data.results;

        if(items[0] == null){
          this.toastrService.info('Content not found');
        }else{
          this.itemsEmitter.emit(items);
        }
      },
      error: (e) => {
        this.toastrService.error('Error loading content');
      }
    })
  }

  reset(){
    if(this.str.trim() != ''){
      this.str = '';
      this.resetEmitter.emit(true);
    }
  }
}
