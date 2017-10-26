import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {FormsModule} from "@angular/forms";
import { NoteAddComponent } from './note-add/note-add.component';
import { NoteListComponent } from './note-list/note-list.component';
import { ApiService } from './api.service';
import {HttpModule} from "@angular/http";
import {NoteDataService} from "./note-data.service";

@NgModule({
  declarations: [
    AppComponent,
    NoteAddComponent,
    NoteListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [NoteDataService,ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
