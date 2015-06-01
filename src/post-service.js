import {singleton, inject} from 'aurelia-framework';
import {HttpClient} from 'aurelia-http-client';

@singleton()
@inject(HttpClient)
export class PostService {
  url = 'http://localhost:8080';

  constructor(HttpClient) {
    this.http = HttpClient;
  }

  getLatestPosts() {
    const link = '/api/posts?limit=3';
    return this.http.get(this.url + link);
  }

  getLatestComments() {
    const link = '/api/posts/comments?limit=3';
    return this.http.get(this.url + link);
  }
}
