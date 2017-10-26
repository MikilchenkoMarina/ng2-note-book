import {Component, OnInit, Output, EventEmitter} from '@angular/core';
import {Note} from "../note";

@Component({
  selector: 'app-note-add',
  template: `
   <p>
  <input class="new-note" placeholder="Add new Note" autofocus="" [(ngModel)]="newNote.title" (keyup.enter)="addNote()">
  </p>
`,
  styleUrls: ['../styles.css']
})
export class NoteAddComponent {

  newNote: Note = new Note();

  //add custom event event emitter add
  @Output()
  add: EventEmitter<Note> = new EventEmitter();

  constructor() {
  }

  addNote() {
    this.add.emit(this.newNote);
    this.newNote = new Note();
  }
}
