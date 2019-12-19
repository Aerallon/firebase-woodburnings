import { FirestoreService } from '../../firestore.service';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { BlogDetails } from '../../interfaces';
import { MatSnackBar } from '@angular/material';


@Injectable({providedIn: 'root'})
export class BlogService {

  constructor(private firestoreService: FirestoreService,
              public snackBar: MatSnackBar) {
  }

  public list(): Observable<BlogDetails[]> {
    return this.firestoreService.list('blogs', ref => {
      return ref;
    });
  }

  public get(blogId: string): Observable<BlogDetails> {
    return this.firestoreService.get<BlogDetails>(`blogs/${blogId}`);
  }

  public add(blog: BlogDetails): Observable<null> {
    return this.firestoreService.add('blogs', blog);
  }

  public update(blog: BlogDetails): Observable<null> {
    return this.firestoreService.update(`blogs/${blog.id}`, blog);
  }

  public delete(blog: BlogDetails): void {
    this.firestoreService.delete(`blogs/${blog.id}`);
  }

  public openSnackBar(message: string, action: string): void {
    this.snackBar.open(message, action, {
      duration: 2000,
    });
  }
}
