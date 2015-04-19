import {singleton} from 'aurelia-framework'

@singleton()
export class PostService {
  constructor() {
    this.url = 'localhost:3000'
  }
}
