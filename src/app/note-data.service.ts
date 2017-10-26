import {Injectable} from '@angular/core';
import {Note} from "./note";
import {ApiService} from "./api.service";
import {Observable} from "rxjs";

@Injectable()
export class NoteDataService {

  constructor(private api: ApiService) {
  }
  // Simulate GET /notes
  getAllNotes(): Observable<Note[]> {
    return this.api.getAllNotes();
  }

  // Simulate POST /notes
  addNote(note: Note): Observable<Note> {
    return this.api.createNote(note);
  }

}
