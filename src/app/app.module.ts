import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ServiceWorkerModule } from '@angular/service-worker';
import { MarkdownModule, MarkedOptions, MarkedRenderer } from 'ngx-markdown';
import 'prismjs';
import 'prismjs/components/prism-typescript.min.js';
import 'prismjs/plugins/line-highlight/prism-line-highlight.js';
import 'prismjs/plugins/line-numbers/prism-line-numbers.js';
import { environment } from '../environments/environment';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LayoutModule } from './pages/layout/layout.module';
import { PagesModule } from './pages/pages.module';



export function markedOptionsFactory(): MarkedOptions {
  const renderer = new MarkedRenderer();

  // FIXME add spacing after each element
  renderer.blockquote = (text: string) => {
    return '<blockquote class="blockquote"><p>' + text + '</p></blockquote>';
  };

  return {
    renderer,
    gfm: true,
    breaks: false,
    pedantic: false,
    smartLists: true,
    smartypants: false,
  };
}

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LayoutModule,
    PagesModule,
    HttpClientModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production }),
    MarkdownModule.forRoot(
      // {
      //   loader: HttpClient,
      //   sanitize: SecurityContext.NONE,
      //   markedOptions: {
      //     useValue: {
      //       gfm: true,
      //       smartLists: true,
      //     },
      //     provide: MarkedOptions,
      //     useFactory: markedOptionsFactory,
      //  },
      // }
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
