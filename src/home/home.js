import {inject} from 'aurelia-framework';
import {PostService} from '../post-service';
import './home.css!';

@inject(PostService)
export class Home {
  latestPosts = [];
  latestPostsError = false;
  latestComments = [];
  latestCommentsError = false;

  constructor(PostService) {
    this.postService = PostService;

    this.postService.getLatestPosts().then(
      response => this.latestPosts = response.content.results,
      error => this.latestPostsError = true
    );

    this.postService.getLatestComments().then(
      response => this.latestComments = response.content.results,
      error => this.latestCommentsError = true
    );
  }
}
