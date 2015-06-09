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
    return this.getPosts(3);
  }

  getLatestComments() {
    const link = '/api/posts/comments?limit=3';
    return this.http.get(this.url + link);
  }

  getPosts(limit = 10, skip = 0) {
    let link = `/api/posts?limit=${limit}&skip=${skip}`;
    return this.http.get(this.url + link);
  }
}
