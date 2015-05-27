import {customElement, bindable} from 'aurelia-framework';
import './date-plate.css!';

export class DatePlate {
  @bindable date;

  dateChanged() {
    this.dateObject = new Date(this.date);
  }
}
