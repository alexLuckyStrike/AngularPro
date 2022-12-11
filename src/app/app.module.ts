import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { PostComponent } from './post/post.component';
import { StampComponent } from './stamp/stamp.component';
import { Post2Component } from './post2/post2.component';
import { Post3Component } from './post3/post3.component';
import {Post4Component} from "./post4/post4.component";
import { FormsModule } from '@angular/forms';
import { PostformComponent } from './postform/postform.component';

@NgModule({
  declarations: [
      AppComponent,
      PostComponent,
      PostformComponent,
    // StampComponent,
    // Post2Component,
    // Post3Component,
    // Post4Component,
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
