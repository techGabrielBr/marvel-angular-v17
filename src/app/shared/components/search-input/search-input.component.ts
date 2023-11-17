import { Component, EventEmitter, Input, Output, Signal, WritableSignal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { GenericItemService } from '../../services/generic-item/generic-item.service';
import { ToastrService } from 'ngx-toastr';
import { BehaviorSubject, Subject } from 'rxjs';

@Component({
  selector: 'app-search-input',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './search-input.component.html',
  styleUrl: './search-input.component.css'
})
export abstract class SearchInputComponent<T extends {data: {results: U [], total: number}}, U> {
  @Output() itemsEmitter = new EventEmitter<{items: U [], firstTime: boolean}>();
  @Output() resetEmitter = new EventEmitter<boolean>();

  @Input({required: true}) type!: string;

  @Input({required: true}) showBtn!: WritableSignal<boolean>;

  @Input({required: true}) loadMoreSubject!: Subject<boolean>;

  constructor(private genericItemService: GenericItemService<T>, private toastrService: ToastrService){}

  total: number = 0;
  offset: number = 0;
  str: string = '';

  private OFFSET_ADD = 20;

  ngOnInit(){
    this.loadMoreSubject.subscribe(v => {
      v == true ? this.loadMore() : null
    });
  }

  search(firstTime: boolean){
    this.showBtn.set(false);

    if(firstTime == true){
      this.offset = 0;
      this.total = 0;
    }

    this.genericItemService.getByStr(this.str, this.type, this.offset).subscribe({
      next: (v: T) => {
        firstTime == true ? this.total = v.data.total : null;

        const items = v.data.results;

        if(items[0] == null){
          this.toastrService.info('Content not found');
        }else{
          this.itemsEmitter.emit({items: items, firstTime: firstTime});
          if(items.length == 20){
            this.showBtn.set(true);
          }
        }
      },
      error: (e) => {
        this.toastrService.error('Error loading content');
      }
    })
  }

  loadMore = () => {
    if((this.total - (this.offset + this.OFFSET_ADD )) > 0){
      this.offset = this.offset + this.OFFSET_ADD;
      this.search(false);
    }else {
      this.toastrService.info('No more content to load');
      this.showBtn.set(false);
    }
  }

  reset(){
    if(this.str.trim() != ''){
      this.str = '';
      this.offset = 0;
      this.total = 0;

      this.resetEmitter.emit(true);
    }
  }
}
