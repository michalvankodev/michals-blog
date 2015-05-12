import {customElement, bindable} from 'aurelia-framework';
import './date-plate.css!';

@customElement('date-plate')
export class DatePlate {
  @bindable date;
  dateObject: Date;

  dateChanged() {
    this.dateObject = new Date(this.date);
  }
}
