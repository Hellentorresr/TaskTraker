import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
  title: string = 'List of post';
  messagetest: string = 'message test';

  postAsParentComp: string = 'Post component as Parent for post-list Component';

  @Input() fromParent: string | undefined;


  constructor() { }

  ngOnInit(): void {
    console.log('ngOnInit')
  }
}
