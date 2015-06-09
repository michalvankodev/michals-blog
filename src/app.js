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
      config.options.pushState = true;
      config.title = 'Michal\'s blog';
      config.map([
        {route: ['', 'home'], moduleId: 'home/home', nav: true, title:'Michal\'s blog'},
        {route: 'posts', moduleId: 'posts/posts', nav: true, title:'All posts'},
        {route: 'posts/:seoTitle', moduleId: 'post/post', nav: false}
      ]);
    });
  }
}
