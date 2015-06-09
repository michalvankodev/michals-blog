import {inject} from 'aurelia-framework';
import {PostService} from '../post-service';
import './posts.css!';

@inject(PostService)
export class Posts {
  posts = [];
  total = 0;

  constructor(postService) {
    this.postService = postService;

    this.postService.getPosts(10, 0).then(
      response => {
        this.posts = response.content.results;
        this.total = response.content.total;
      },
      error => this.latestPostsError = true
    );
  }
}
