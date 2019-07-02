import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material';
import { FirestoreService } from '../../../firestore.service';
import { BlogService } from '../blog.service';

@Component({
    templateUrl: './write-blog.component.html',
    styleUrls: ['./write-blog.component.scss'],
    selector: 'write-blog'
})

export class WriteBlogComponent implements OnInit {

  form: FormGroup;
  displayName: string;

  constructor(private formBuilder: FormBuilder,
              public dialogRef: MatDialogRef<WriteBlogComponent>,
              private blogService: BlogService,
              private firestoreService: FirestoreService) {
    //
  }

  ngOnInit(): void {
    this.createForm();
  }

  createForm(): void {
    this.form = this.formBuilder.group({
      'title': ['', Validators.required],
      'content': ['', Validators.required],
      'published': [false],
      'commentsAllowed': [false]
    });
  }

  submitBlog(): void {
    if (this.form.valid) {
      const blogFormData = {
        id: this.firestoreService.id,
        title: this.form.value.title,
        content: this.form.value.content,
        writer: '', // TODO: Fill this out with the logged in user's first and last name
        published: this.form.value.published,
        commentsAllowed: this.form.value.commentsAllowed
      };
      this.blogService.add(blogFormData);
      // TODO: Have this or an error message show if the service isn't successful
      const message = 'Successfully submitted new blog.';
      this.blogService.openSnackBar(message, '');
      this.dialogRef.close();
    }
  }

  close(): void {
      this.dialogRef.close();
  }
}
