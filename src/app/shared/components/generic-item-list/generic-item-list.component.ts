import { BehaviorSubject, Subject } from 'rxjs';
import { Component, signal } from '@angular/core';
import { ToastrService } from "ngx-toastr";
import { GenericItemService } from "../../services/generic-item/generic-item.service";

@Component({
  template: ''
})
export abstract class GenericItemList<T extends {data:{results: U[], total: number}}, U extends {name?: string, thumbnail: {path: string, extension: string, title?: string}}>{
  loadMoreSubject: Subject<boolean> = new Subject();

  constructor(private genericItemService: GenericItemService<T>, private toastrService: ToastrService){}

  items: U[] = [];
  offset = 0;
  total!: number;
  showBtn = signal(false);

  private OFFSET_ADD: number = 20;
  private searchMode = false;

  ngOnInit(){
    this.getItems(true);
  }

  getItems = (firstTime: boolean) =>{
    this.showBtn.set(false);
    this.genericItemService.getAll(this.offset).subscribe({
      next: (v: T) => {
        firstTime == true ? this.total = v.data.total : null;
        const items = v.data.results;
        this.items = [...this.items, ...items];

        items.length >= 20 ? this.showBtn.set(true) : this.showBtn.set(false);
      },
      error: (e) => {
        this.toastrService.error('Error loading content');
        this.showBtn.set(false);
      }
    });
  }

  getByStr = (event: {items: U [], firstTime: boolean}) =>{
    event.firstTime == true ? this.items = event.items : this.items = [...this.items, ...event.items];
    this.searchMode = true;
  }

  reset = (event: boolean) => {
    if(event == true){
      this.items = [];
      this.offset = 0;
      this.total = 0;
      this.searchMode = false;

      this.getItems(true);
    }
  }

  loadMore = () => {
    if(this.searchMode == false){
      if((this.total - (this.offset + this.OFFSET_ADD )) > 0){
        this.offset = this.offset + this.OFFSET_ADD;
        this.getItems(false);
      }else {
        this.toastrService.info('No more content to load');
        this.showBtn.set(false);
      }
    }else{
      this.loadMoreSubject.next(true);
    }
  }
}
