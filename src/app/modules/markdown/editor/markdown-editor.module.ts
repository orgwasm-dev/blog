import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EditorComponent } from './editor.component';
import { EditorOptions } from './model/simplemde-options.model';

@NgModule({
  declarations: [
    EditorComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    EditorComponent
  ]
})
export class MarkdownEditorModule {

  static forRoot(config: EditorOptions) {
    return {
      ngModule: MarkdownEditorModule,
      providers: [{
        provide: EditorOptions,
        useValue: config
      }]
    };
  }
}
