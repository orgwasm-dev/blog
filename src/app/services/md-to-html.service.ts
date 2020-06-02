import { Injectable } from '@angular/core';

import { Converter } from 'showdown';
import * as showdownKatex from 'showdown-katex';
import * as footnotes from 'showdown-footnotes';
import * as xssFilter from 'showdown-xss-filter';


@Injectable({
  providedIn: 'root'
})
export class MdToHtmlService {

  private converter: Converter;

  constructor() {
    this.converter = new Converter({
      extensions: [
        showdownKatex({
          throwOnError: true,
          displayMode: false,
          errorColor: '#1500ff',
        }),
        footnotes,
        xssFilter
      ],
    });
  }

  toHtml(content: string): string {
    return this.converter.makeHtml(content);
  }
}
