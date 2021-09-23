import { Component, OnInit } from '@angular/core';
import { Post } from '../../modelos/post';
import { PostService } from '../../servicios/post.service';
import { Global } from '../../servicios/global';


@Component({
  selector: 'app-crear-articulo',
  templateUrl: './crear-articulo.component.html',
  styleUrls: ['./crear-articulo.component.css'],
  providers:[PostService]
})
export class CrearArticuloComponent implements OnInit {

	public title: string;
	public post: Post;

  constructor(
  private _postService: PostService

  ) { 

  	this.title='Crear Post';
    this.post= new Post('','','','','','','');
  	


  }

  ngOnInit(): void {
  }
    onSubmit() {
      console.log(this.post)
    }



}

