import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  public title: string = 'To Do App'
  public item: string = ''
  public currentIndex: string = ''
  public items:  Array<string> = []
  public isUpdating: boolean = false

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
