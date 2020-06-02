import { Component, Input, OnInit, Output, ViewChild, ElementRef, EventEmitter, ViewEncapsulation, OnDestroy, AfterViewInit } from '@angular/core';
import { EditorOptions } from './model/simplemde-options.model';
import * as SimpleMDE from 'simplemde';

@Component({
  selector: 'app-editor',
  encapsulation: ViewEncapsulation.None,
  template: '`<textarea name="markdown-editor" #editor></textarea>`',
  styleUrls: ['./editor.component.scss']
})
export class EditorComponent implements OnInit, OnDestroy, AfterViewInit {

  @Input() markdown: any;

  @Output() markdownChange = new EventEmitter<string>();

  @ViewChild('editor') textarea: ElementRef;
  private editor: SimpleMDE;

  constructor(private editorOptions: EditorOptions) {}

  ngOnInit(): void {
    if (this.editorOptions === null) {
      this.editorOptions = new EditorOptions();
      this.editorOptions.autoDownloadFontAwesome = true;
    }
    this.editorOptions.initialValue = this.markdown;
    this.editor = new SimpleMDE(this.editorOptions);
  }

  ngAfterViewInit() {
    if (this.editor === null) { console.error('Editor could not be initialized.'); }
    this.editor.codemirror.on('change', () => {
      this.markdownChange.emit(this.editor.value());
    });
  }

  ngOnDestroy(): void {
    this.editor = null;
   }

}
