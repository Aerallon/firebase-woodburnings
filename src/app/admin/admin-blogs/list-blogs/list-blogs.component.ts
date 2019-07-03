import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { BlogDetails } from '../../../interfaces';
import { MatDialog, MatDialogRef } from '@angular/material';
import { DeleteBlogComponent } from '../delete-blog/delete-blog.component';
import { UpdateBlogComponent } from '../update-blog/update-blog.component';
import { BlogService } from '../blog.service';

@Component({
    templateUrl: './list-blogs.component.html',
    styleUrls: ['./list-blogs.component.scss'],
    selector: 'list-blogs'
})

export class ListBlogsComponent implements OnInit {

  public allBlogs$: Observable<BlogDetails[]>;
  deleteBlogDialogRef: MatDialogRef<DeleteBlogComponent>;
  updateBlogDialogRef: MatDialogRef<UpdateBlogComponent>;

  displayedColumns = ['title', 'content', 'writer', 'published', 'commentsAllowed', 'menu'];

  constructor(private blogService: BlogService,
              private dialog: MatDialog) {
    //
  }

  ngOnInit(): void {
    this.allBlogs$ = this.blogService.list();
  }

  // TODO: Add Preview Dialog as well here

  openUpdateBlogDialog(blog: BlogDetails): void {
    this.updateBlogDialogRef = this.dialog.open(UpdateBlogComponent, { width: '500px' });
    this.updateBlogDialogRef.componentInstance.blog = blog;
  }

  openDeleteDialog(blog: BlogDetails): void {
    this.deleteBlogDialogRef = this.dialog.open(DeleteBlogComponent, { width: '500px' });
    this.deleteBlogDialogRef.componentInstance.blog = blog;
  }
}
