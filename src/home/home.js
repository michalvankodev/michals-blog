import {inject} from 'aurelia-framework';
import {HttpClient} from 'aurelia-http-client';
import {PostService} from '../post-service';
import './home.css!';

@inject(PostService)
export class Home {
  latestPosts;
  latestPostsError;

  constructor(PostService) {
    this.postService = PostService;

    this.postService.getLatestPosts().then(
      response => this.latestPosts = response.results,
      error => {
        this.latestPostsError = true;
      }
    );
  }
}
