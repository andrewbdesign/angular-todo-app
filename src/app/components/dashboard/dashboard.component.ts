import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  public item: string = ''
  public currentIndex: string = ''
  public isUpdating: boolean = false

  @Input() items: string;
  @Input() myTitle: string;
  @Output() addItemEvent = new EventEmitter<string>()
  @Output() removeItemEvent = new EventEmitter<number>()

  constructor() { }

  ngOnInit() {
  }

  onAddItem(e:any) {
    e.preventDefault()
    // console.log(`add item: ${this.item}`)
    if (this.item.length > 0 && this.item !== '') {
      this.addItemEvent.emit(this.item)
      this.item = ''
    }
  }

  onDeleteItem(item) {
    this.removeItemEvent.emit(item)
  }

  onEditItem(item) {
    this.item = this.items[item]
    this.currentIndex = item;
    this.isUpdating = true;
  }

  onUpdateItem() {
    this.items[this.currentIndex] = this.item
    this.currentIndex = ''
    this.item = ''
    this.isUpdating = false;
  }

  onSelectItem() {
    const randomItem = Math.floor(Math.random() * this.items.length)
    alert(this.items[randomItem])
  }

  formIsValid() {
    return !(this.item.length > 0 && this.item !== '')
  }

  optionsAreValid() {
    return !(this.items.length > 0)
  }

  onKey(input:any) {
    this.item = input
  }

}
