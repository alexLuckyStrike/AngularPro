import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { Post } from '../app.component';

@Component({
  selector: 'app-postform',
  templateUrl: './postform.component.html',
  styleUrls: ['./postform.component.css']
})
export class PostformComponent implements OnInit {

  @Output()
  onAdd: EventEmitter<Post> =new EventEmitter<Post>();

  @ViewChild('titleInput',{static:false}) inputRef!:ElementRef

  title:string = ''
  text:string = ''

  constructor() { }

  ngOnInit(): void {
    // при обращении к референции titleInput: в методе ngOnIt, необходимо использовать "static:true"
    // при обращении к референции вне метода необходимо использовать 'static:false' 
  }

  addPost(){
    if(this.text.trim() && this.title.trim()){
     const post:Post={
      title:this.title,
      text:this.text
     }

     this.onAdd.emit(post);
     console.log('New Post: ',post)
     this.title = this.text = ''
    }
  }

  focusTitle(){
   console.log('inputRef:',this.inputRef)
   this.inputRef.nativeElement.focus()
  } 

}
