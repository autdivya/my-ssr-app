import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Title, Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './services.html',
  styleUrls: ['./services.css']
})
export class ServicesComponent implements OnInit {

  constructor(private title: Title, private meta: Meta) {} // ✅ REQUIRED

  ngOnInit(): void {
    this.title.setTitle('Our Services | QuickServe');

    this.meta.updateTag({
      name: 'description',
      content: 'Explore professional plumbing, electrical, and cleaning services offered by QuickServe for homes and offices.'
    });

    this.meta.updateTag({
      name: 'keywords',
      content: 'plumbing services, electrical repair, home cleaning, service providers'
    });
  }
}