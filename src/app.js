import {inject} from 'aurelia-framework';
import {Router} from 'aurelia-router';
import 'normalize.css/normalize.css!';
import 'flexboxgrid/dist/flexboxgrid.css!';
import './app.css!';

@inject(Router)
export class App {
  constructor(router) {
    this.router = router;

    this.router.configure(config => {
      config.pushState = true;
      config.title = 'Michal\'s Blog';
      config.map([
        {route: '',  moduleId: 'home/home',      nav: true, title:'Michal\'s blog'}
      ]);
    });
  }
}
