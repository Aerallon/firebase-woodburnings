import { Component, Input } from '@angular/core';
import { BlogDetails } from '../../../interfaces';
import { MatDialogRef } from '@angular/material';
import { BlogService } from '../blog.service';

@Component({
    templateUrl: './delete-blog.component.html',
    styleUrls: ['./delete-blog.component.scss'],
    selector: 'delete-blog'
})

export class DeleteBlogComponent {

  @Input() blog: BlogDetails;

  constructor(public dialogRef: MatDialogRef<DeleteBlogComponent>,
              private blogService: BlogService) {
  }

  deleteBlog(): void {
    this.blogService.delete(this.blog);
    // TODO: Listen to the delete call and show proper success or error message depending on the call
    const message = 'Successfully deleted ' + this.blog.title + '.';
    this.blogService.openSnackBar(message, '');
    this.dialogRef.close();
  }

  close(): void {
    this.dialogRef.close();
  }
}
