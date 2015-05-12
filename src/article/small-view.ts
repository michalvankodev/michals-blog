import {customElement, bindable} from 'aurelia-framework';
import './article.css!';

@customElement('small-article')
export class SmallArticle {
  @bindable article;
}
