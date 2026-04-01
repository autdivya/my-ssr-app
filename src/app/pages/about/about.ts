



import { Component, OnInit } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-about',
  standalone: true,
  templateUrl: './about.html',
  styleUrls: ['./about.css']
})
export class AboutComponent implements OnInit {

  constructor(private title: Title, private meta: Meta) {}

  ngOnInit() {
    this.title.setTitle('About Us | QuickServe');

    this.meta.updateTag({
      name: 'description',
      content: 'Learn about QuickServe – a trusted platform for booking home services like plumbing, electrical and cleaning.'
    });

    this.meta.updateTag({
      name: 'keywords',
      content: 'about QuickServe, home services platform, booking services'
    });
  }
}

