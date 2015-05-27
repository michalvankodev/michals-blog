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
    var link = '/api/posts?limit=3';
    return new Promise((resolve, reject) => {
      this.http.get(this.url + link).then(
        responseMsg => resolve(JSON.parse(responseMsg.response)),
        error => reject(error)
      );
    });
  }
}
