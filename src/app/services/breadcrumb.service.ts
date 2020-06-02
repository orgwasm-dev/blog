import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class BreadcrumbService {
  private breadCrumbsArr: string[][]; // [title, link]

  get breadcrumbs(): string[][] {
    return this.breadCrumbsArr;
  }

  set breadcrumbs(crumbs: string[][]) {
    this.breadCrumbsArr = crumbs;
  }

  add(crumb: string[]): string[][] {
    this.breadCrumbsArr.push(crumb);
    return this.breadcrumbs;
  }

  pop(): string[][] {
    this.breadCrumbsArr.pop();
    return this.breadcrumbs;
  }
}
