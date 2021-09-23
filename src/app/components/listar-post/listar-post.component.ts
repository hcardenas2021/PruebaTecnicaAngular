import { Component, OnInit } from '@angular/core';
import { Post } from '../../modelos/post';
import { PostService } from '../../servicios/post.service';
import { Global } from '../../servicios/global';

@Component({
  selector: 'app-listar-post',
  templateUrl: './listar-post.component.html',
  styleUrls: ['./listar-post.component.css'],
  providers:[PostService]
})
export class ListarPostComponent implements OnInit {

public posts: Post[];
public url: string;
	
  constructor(
  private _postService: PostService
  ) { 

this.url= Global.url;
this.posts = [];
  }

  ngOnInit(): void {
  this.mostrarPosts();
  }

mostrarPosts() {

this._postService.mostrarPosts().subscribe(
  response => {
    if(response.posts){
      this.posts = response.posts
    }
  },
  error => {
  console.log (<any>error);
  }

);
}

}
