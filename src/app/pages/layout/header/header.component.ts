import { Component, Input, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs/operators';
import { BreadcrumbService } from 'src/app/services/breadcrumb.service';
import { PostLoaderService } from 'src/app/services/post-loader.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  @Input() title: string;
  breadcrumbs: string[][];

  constructor(
    private breadcrumbService: BreadcrumbService,
    private postLoader: PostLoaderService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.breadcrumbs = this.breadcrumbService.breadcrumbs = this
      .breadcrumbService.breadcrumbs
      ? this.breadcrumbService.breadcrumbs
      : [['HOME', '/']];
    // TODO move to service
    this.router.events
      .pipe(
        filter(
          (event): event is NavigationEnd => event instanceof NavigationEnd
        )
      )
      .subscribe((current) => {
        console.log(
          'HeaderComponent -> ngOnInit -> current',
          current,
          this.breadcrumbService.breadcrumbs
        );
        if (this.breadcrumbService.breadcrumbs.length === 2) {
          this.breadcrumbs = this.breadcrumbService.pop();
        }
        if (current.urlAfterRedirects === '/') { return; }
        if (current.urlAfterRedirects.startsWith('/post')) {
          console.log('filename sf', current.urlAfterRedirects.substring('/post'.length));
          this.breadcrumbs = this.breadcrumbService.add([
            this.postLoader.findTitleByFilename(current.urlAfterRedirects.substring('/post'.length + 1)),
            current.urlAfterRedirects,
          ]);
        } else {
          this.breadcrumbs = this.breadcrumbService.add([
            current.url.toUpperCase().replace(/-/g, ' ').replace('/', ''),
            current.url,
          ]);
        }
      });
  }
}
