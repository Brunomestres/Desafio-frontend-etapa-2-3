import { Component, OnInit } from '@angular/core';
import { Post } from 'src/interfaces/post';
import { PostsService } from '../../posts.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  posts: Post[] = [];
  constructor(private postsService: PostsService) { }

  ngOnInit(): void {
    this.postsService.getPosts().subscribe(response => {
      this.posts = response;
    });
  }

}
