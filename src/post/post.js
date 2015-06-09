import {inject} from 'aurelia-framework';
import {PostService} from '../post-service';
import './post.css!';

@inject(PostService)
export class Post {
  post = {};

  constructor(postService) {
    this.postService = postService;
  }

  activate(params, routeConfig, navigationInstruction) {
    return this.postService.getPost(params.seoTitle)
      .then(response => {
        this.post = response.content;
        routeConfig.title = this.post.title;
      },
        error => this.error = true
      )
  }
}
