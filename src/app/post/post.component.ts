import { Component, ContentChild, ElementRef, Input, OnInit } from '@angular/core';
import {Post} from '../app.component';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})

export class PostComponent implements OnInit {

  @Input() post!: Post; 
  @ContentChild('info',{static:true}) infoRef!:ElementRef

  constructor() { }

  ngOnInit(): void {
    console.log('nativeElement',this.infoRef.nativeElement)
  }

}
