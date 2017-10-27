import {Component, Input, Output, EventEmitter} from '@angular/core';
import {Note} from "../note";

@Component({
  selector: 'app-note-list',
  template: `
  <section class="main">
    <ul class="note-list">
      <li *ngFor="let note of notes">
        <div class="view">
            <label>{{note.id}}. {{note.title}} : {{note.text}}</label>
            <button class = "destroy-button" (click) ="deleteNoteById(note)"> </button>
        </div>
      </li>
    </ul>
  </section>
`,
  styleUrls: ['../styles.css']
})
export class NoteListComponent {
  @Input()
  notes: Note[];

  @Output()
  removeNote: EventEmitter<Note> = new EventEmitter();

  constructor() {
  }

  public deleteNoteById(note: Note) {
    this.removeNote.emit(note);
  }
}
