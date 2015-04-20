import {inject} from 'aurelia-framework';
import {HttpClient} from 'aurelia-http-client';
import {PostService} from '../post-service';
import './home.css!';

@inject(HttpClient, PostService)
export class Home {
  constructor(http, PostService) {
    this.http = http;
    this.postService = PostService;

    this.latestPosts = this.getLatestPosts();
  }

  getLatestPosts() {
    // TODO this.http.get(this.postService.url)
    return [
      {
        "author" : {
            "name" : "Tester",
            "email" : "testing@awesome.com"
        },
        "body" : "<p>Krasny den</p> <p>Krasny den</p>  <p>Krasny den</p>  <p>Krasny den</p>  <p>Krasny den</p>  <p>Krasny den</p> <p>Krasny den</p> <p>Krasny den</p> <p>Krasny den</p> <p>Krasny den</p> <p>Krasny den</p> <p>Krasny den</p> <p>Krasny den</p> <p>Krasny den</p> <p>Krasny den</p> <p>Krasny den</p> <p>Krasny den</p> <p>Krasny den</p> <p>Krasny den</p> <p>Krasny den</p> <p>Krasny den</p> <p>Krasny den</p> <p>Krasny den</p> <p>Krasny den</p> <p>Krasny den</p> <p>Krasny den</p> <p>Krasny den</p> <p>Krasny den</p> <p>Krasny den</p> <p>Krasny den</p> <p>Krasny den</p> <p>Krasny den</p> <p>Krasny den</p> <p>Krasny den</p> <p>Krasny den</p> <p>Krasny den</p> <p>Krasny den</p> <p>Krasny den</p> <p>Krasny den</p> <p>Krasny den</p> <p>Krasny den</p> <p>Krasny den</p> <p>Krasny den</p> <p>Krasny den</p> <p>Krasny den</p> <p>Krasny den</p> <p>Krasny den</p> <p>Krasny den</p> <p>Krasny den</p> <p>Krasny den</p> <p>Krasny den</p> <p>Krasny den</p> <p>Krasny den</p> <p>skareda noc</p>",
        "comments" : [
            {
                "body" : "Hey, Tests are awesome",
                "isReply" : false,
                "date" : "2015-04-06T12:59:11.052Z",
                "author" : {
                    "name" : "Tester",
                    "email" : "testing@awesome.com"
                }
            },
            {
                "body" : "Hey, Tests are still awesome",
                "isReply" : false,
                "date" : "2015-04-06T13:10:35.727Z",
            }
        ],
        "createdDate" : "2015-04-05T22:24:32.633Z",
        "lastUpdated" : "2015-04-05T22:24:32.632Z",
        "seoTitle" : "esteraz",
        "state" : "Published",
        "title" : "skusmeto"
      },
      {
        "author" : {
            "name" : "Tester",
            "email" : "testing@awesome.com"
        },
        "body" : "<p>Krasny den</p> <p>Krasny den</p>  <p>Krasny den</p>  <p>Krasny den</p>  <p>Krasny den</p>  <p>Krasny den</p> <p>Krasny den</p> <p>Krasny den</p> <p>Krasny den</p> <p>Krasny den</p> <p>Krasny den</p> <p>Krasny den</p> <p>Krasny den</p> <p>Krasny den</p> <p>Krasny den</p> <p>Krasny den</p> <p>Krasny den</p> <p>Krasny den</p> <p>Krasny den</p> <p>Krasny den</p> <p>Krasny den</p> <p>Krasny den</p> <p>Krasny den</p> <p>Krasny den</p> <p>Krasny den</p> <p>Krasny den</p> <p>Krasny den</p> <p>Krasny den</p> <p>Krasny den</p> <p>Krasny den</p> <p>Krasny den</p> <p>Krasny den</p> <p>Krasny den</p> <p>Krasny den</p> <p>Krasny den</p> <p>Krasny den</p> <p>Krasny den</p> <p>Krasny den</p> <p>Krasny den</p> <p>Krasny den</p> <p>Krasny den</p> <p>Krasny den</p> <p>Krasny den</p> <p>Krasny den</p> <p>Krasny den</p> <p>Krasny den</p> <p>Krasny den</p> <p>Krasny den</p> <p>Krasny den</p> <p>Krasny den</p> <p>Krasny den</p> <p>Krasny den</p> <p>Krasny den</p> <p>skareda noc</p>",
        "comments" : [
            {
                "body" : "Hey, Tests are awesome",
                "isReply" : false,
                "date" : "2015-04-06T12:59:11.052Z",
                "author" : {
                    "name" : "Tester",
                    "email" : "testing@awesome.com"
                }
            },
            {
                "body" : "Hey, Tests are still awesome",
                "isReply" : false,
                "date" : "2015-04-06T13:10:35.727Z",
            }
        ],
        "createdDate" : "2015-04-05T22:24:32.633Z",
        "lastUpdated" : "2015-04-05T22:24:32.632Z",
        "seoTitle" : "esteraz",
        "state" : "Published",
        "title" : "skusmeto"
      }
    ];
  }
}
