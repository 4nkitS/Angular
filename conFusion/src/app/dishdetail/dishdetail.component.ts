import { Component, OnInit, Input } from '@angular/core';
import { Dish } from '../shared/dish'

@Component({
  selector: 'app-dishdetail',
  templateUrl: './dishdetail.component.html',
  styleUrls: ['./dishdetail.component.scss']
})
export class DishdetailComponent implements OnInit {
  //selectedDish = DISHES[0]; //dishes = DISHES; also works as types is found automatically  

  @Input()
  dish: Dish;

  constructor() { }

  ngOnInit() {
  }
}
