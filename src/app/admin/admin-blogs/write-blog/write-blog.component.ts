import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material';
import { FirestoreService } from '../../../firestore.service';
import { BlogService } from '../blog.service';
import { shareReplay, switchMap } from 'rxjs/operators';
import { Observable, of } from 'rxjs';
import { AppUser } from '../../../interfaces';
import { AuthService } from '../../../core/auth.service';
import { UserService } from '../../../user.service';

@Component({
    templateUrl: './write-blog.component.html',
    styleUrls: ['./write-blog.component.scss'],
    selector: 'write-blog'
})

export class WriteBlogComponent implements OnInit {

  form: FormGroup;
  user$: Observable<AppUser>;
  displayName: string;

  constructor(private formBuilder: FormBuilder,
              public dialogRef: MatDialogRef<WriteBlogComponent>,
              private blogService: BlogService,
              private firestoreService: FirestoreService,
              private authService: AuthService,
              private userService: UserService) {
    //
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
        writer: this.displayName,
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
