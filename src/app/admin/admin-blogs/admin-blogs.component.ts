import { Component } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material';
import { WriteBlogComponent } from './write-blog/write-blog.component';

@Component({
    templateUrl: './admin-blogs.component.html',
    styleUrls: ['./admin-blogs.component.scss'],
    selector: 'admin-blog'
})

export class AdminBlogsComponent {

  writeBlogDialogRef: MatDialogRef<WriteBlogComponent>;

  constructor(private dialog: MatDialog) {
  }

  openWriteBlogDialog(): void {
    this.writeBlogDialogRef = this.dialog.open(WriteBlogComponent, { width: '500px' });
  }
}
