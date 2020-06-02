import {
  BlockStyleOptions,
  AutoSaveOptions,
  InsertTextOptions,
  ParsingOptions,
  RenderingOptions,
  ShortcutsArray,
  StatusBarItem,
  ToolbarIcon
} from 'simplemde';

interface EditorOptions {
  autoDownloadFontAwesome?: boolean;
  autofocus?: boolean;
  autosave?: AutoSaveOptions;
  blockStyles?: BlockStyleOptions;
  element?: HTMLElement;
  forceSync?: boolean;
  hideIcons?: string[];
  indentWithTabs?: boolean;
  initialValue?: string;
  insertTexts?: InsertTextOptions;
  lineWrapping?: boolean;
  parsingConfig?: ParsingOptions;
  placeholder?: string;
  previewRender?: (markdownPlaintext: string, previewElement?: HTMLElement) => string;
  promptURLs?: boolean;
  renderingConfig?: RenderingOptions;
  shortcuts?: ShortcutsArray;
  showIcons?: string[];
  spellChecker?: boolean;
  status?: boolean|Array<string|StatusBarItem>;
  styleSelectedText?: boolean;
  tabSize?: number;
  toolbar?: boolean|Array<string|ToolbarIcon>;
  toolbarTips?: boolean;
}
