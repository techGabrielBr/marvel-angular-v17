import { Component, signal } from '@angular/core';
import { ToastrService } from "ngx-toastr";
import { GenericItemService } from "../../services/generic-item/generic-item.service";

@Component({
  template: ''
})
export abstract class GenericItemList<T extends {data:{results: U[], total: number}}, U extends {name?: string, thumbnail: {path: string, extension: string, title?: string}}>{
  constructor(private genericItemService: GenericItemService<T>, private toastrService: ToastrService){}

  items: U[] = [];
  offset = 0;
  total!: number;
  showBtn = signal(false);

  private OFFSET_ADD: number = 20;

  ngOnInit(){
    this.getItemsFirstTime();
  }

  getItemsFirstTime = () =>{
    this.showBtn.set(false);
    this.genericItemService.getAll(this.offset).subscribe({
      next: (v: T) => {
        this.total = v.data.total;
        const items = v.data.results;
        this.items = [...this.items, ...items];
        this.showBtn.set(true);
      },
      error: (e) => {
        this.toastrService.error('Error loading content');
        this.showBtn.set(false);
      }
    });
  }

  getItems = () =>{
    this.showBtn.set(false);
    this.genericItemService.getAll(this.offset).subscribe({
      next: (v: T) => {
        const items = v.data.results;
        this.items = [...this.items, ...items];
        this.showBtn.set(true);
      },
      error: (e) => {
        this.toastrService.error('Error loading content');
        this.showBtn.set(false);
      }
    });
  }

  getByStr = (event: U []) =>{
    this.showBtn.set(false);
    this.items = event;
  }

  reset = (event: boolean) => {
    if(event == true){
      this.items = [];
      this.offset = 0;
      this.total = 0;

      this.getItemsFirstTime();
    }
  }

  loadMore = () => {
    if((this.total - (this.offset + this.OFFSET_ADD )) > 0){
      this.offset = this.offset + this.OFFSET_ADD;
      this.getItems();
    }else {
      this.toastrService.info('No more content to load');
      this.showBtn.set(false);
    }
  }
}
