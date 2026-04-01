/*import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class HomeComponent {}*/

import { Component, OnInit } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-home',
  standalone: true,
  templateUrl: './home.html',
  styleUrls: ['./home.css']

})
export class HomeComponent implements OnInit {

  constructor(private title: Title, private meta: Meta) {}

  ngOnInit() {
    this.title.setTitle('Home | QuickServe');

    this.meta.updateTag({
      name: 'description',
      content: 'Book plumbing, electrical and cleaning services online easily.'
    });
  }
}


