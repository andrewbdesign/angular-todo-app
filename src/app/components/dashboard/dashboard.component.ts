import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  public item: string = ''
  public currentIndex: string = ''
  public items:  Array<string> = []
  public isUpdating: boolean = false
  public message: string = 'Hola coma estas muy bien!!!'

  @Input() myTitle: string
  @Output() messageEvent = new EventEmitter<string>()

  constructor() { }

  ngOnInit() {
  }

  onAddItem(e:any) {
    e.preventDefault()
    console.log(`add item: ${this.item}`)
    if (this.item.length > 0 && this.item !== '') {
      this.items.push(this.item)
      this.item = ''
    }
  }

  sendMessage() {
    this.messageEvent.emit(this.message)
  }

  onDeleteItem(item) {
    console.log('delete item', item)
    this.items.splice(item, 1)
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
