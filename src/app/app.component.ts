import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Title } from '@angular/platform-browser';

import { Observable } from 'rxjs/Observable';

import {FirebaseObjectObservable, FirebaseListObservable} from 'angularfire2/database-deprecated';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';

interface AdListing {
  title: string;
  html: string;
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  route: string;
  title = 'app';
  html;
  articles: AngularFireList<any>;
  coursesObservable: Observable<any[]>;
  constructor( private titleService: Title, private db: AngularFireDatabase, private router: Router) {

   }
  ngOnInit() {
    this.router.events.subscribe((val) => {
      console.log(window.location.href);
      this.route = window.location.href.split('/').pop();
      this.titleService.setTitle(this.route);
    });

    this.articles = this.db.list('/pages');
    this.coursesObservable = this.articles.valueChanges();
  }

  edit(adlisting: AdListing) { // ad: FirebaseObjectObservable<AdListing>) {
   // ad.update(data);
    this.html = adlisting.html;
  }
  add() {
    const article = {html: this.html};
    this.articles.push(article);
    this.html = undefined;
  }
}
