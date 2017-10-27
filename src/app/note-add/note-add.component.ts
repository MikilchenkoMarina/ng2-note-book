import {Component, OnInit, Output, EventEmitter} from '@angular/core';
import {Note} from "../note";

@Component({
  selector: 'app-note-add',
  template: `
   <p>
  <input  class = "new-note" placeholder="Note's title" autofocus="" [(ngModel)]="newNote.title">
  <input  class = "new-note" placeholder="Note's text" autofocus="" [(ngModel)]="newNote.text">
  <button class = "add-button" (click)="addNote()"> Save Note </button>
  </p>
`,
  styleUrls: ['../styles.css']
})
export class NoteAddComponent {

  newNote: Note = new Note();

  //add custom event event emitter add
  @Output() add: EventEmitter<Note> = new EventEmitter();
  @Output() alert = new EventEmitter <string>();

  constructor() {
  }

  addNote() {
    this.add.emit(this.newNote);
    this.newNote = new Note();
  }
  showAlert() {
   this.alert.emit('Eeeee!');
  }
}
