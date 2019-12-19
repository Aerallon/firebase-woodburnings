import { Component, Input, OnInit } from '@angular/core';
import { AppUser, BlogDetails } from '../../../interfaces';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material';
import { BlogService } from '../blog.service';
import { UserService } from '../../../user.service';
import { AuthService } from '../../../core/auth.service';
import { shareReplay, switchMap } from 'rxjs/operators';
import { Observable, of } from 'rxjs';

@Component({
    templateUrl: './update-blog.component.html',
    styleUrls: ['./update-blog.component.scss'],
    selector: 'update-blog'
})

export class UpdateBlogComponent implements OnInit {

  @Input() blog: BlogDetails;
  form: FormGroup;
  user$: Observable<AppUser>;
  displayName: string;

  constructor(private formBuilder: FormBuilder,
              public dialogRef: MatDialogRef<UpdateBlogComponent>,
              private blogService: BlogService,
              private userService: UserService,
              private authService: AuthService) {
  }

  ngOnInit(): void {

    this.user$ = this.authService.userId.pipe(
      switchMap(uid => {
        if (!uid) {
          return of(null);
        }
        return this.userService.listen(uid);
      }),
      shareReplay(1),
    );
    this.user$.subscribe(user => {
      this.displayName = user.firstName + ' ' + user.lastName;
    });

    this.createForm();
  }

  createForm(): void {
    this.form = this.formBuilder.group({
      'title': [this.blog.title, Validators.required],
      'content': [this.blog.content, Validators.required],
      'published': [this.blog.published],
      'commentsAllowed': [this.blog.commentsAllowed]
    });
  }

  updateBlog(): void {
    if (this.form.valid) {
      const blogFormData = {
        id: this.blog.id,
        title: this.form.value.title,
        content: this.form.value.content,
        writer: this.displayName,
        published: this.form.value.published,
        commentsAllowed: this.form.value.commentsAllowed
      };
      this.blogService.update(blogFormData);
      // TODO: Handle error message if something goes wrong with the update - success will currently always be shown
      const message = 'Successfully updated ' + blogFormData.title + '.';
      this.blogService.openSnackBar(message, '');
      this.dialogRef.close();
    }
  }

  close(): void {
    this.dialogRef.close();
  }
}
