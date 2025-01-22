import { Component, Input, Output, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.css'],
  imports: [FormsModule]
})
export class EditorComponent {
  @Input() htmlContent: string = '';
  @Output() update = new EventEmitter<string>();
  @Output() download = new EventEmitter<void>();

  wrapText(startTag: string, endTag: string) {
    const textarea = <HTMLTextAreaElement>document.getElementById('editor');
    const selectionStart = textarea.selectionStart;
    const selectionEnd = textarea.selectionEnd;
    const selectedText = textarea.value.substring(selectionStart, selectionEnd);
    const newText = startTag + selectedText + endTag;
    this.htmlContent = textarea.value.substring(0, selectionStart) + newText + textarea.value.substring(selectionEnd);
    this.update.emit(this.htmlContent);
  }

  onContentChange() {
    this.update.emit(this.htmlContent);
  }
}
