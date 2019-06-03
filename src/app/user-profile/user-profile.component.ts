import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';
import { UserService } from '../user.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AppUser } from '../interfaces';
import { WoodburningStoreService } from '../woodburning-store.service';
import { Subscription } from 'rxjs';

@Component({
    templateUrl: './user-profile.component.html',
    styleUrls: ['./user-profile.component.scss'],
    selector: 'user-profile'
})

export class UserProfileComponent implements OnInit, OnDestroy {

  form: FormGroup;
  @Input() user: AppUser;
  currentUser: AppUser;
  private subscriptions: Subscription[] = [];

  constructor(private formBuilder: FormBuilder,
              public dialogRef: MatDialogRef<UserProfileComponent>,
              private userService: UserService,
              private woodburningStoreService: WoodburningStoreService) {
  }

  ngOnInit(): void {
    this.subscriptions.push(
      this.userService.get(this.user.id).subscribe( currentUser => {
        this.currentUser = currentUser;
      })
    );
    this.createForm();
  }

  createForm(): void {
    this.form = this.formBuilder.group({
      'firstName': [this.user.firstName, Validators.required],
      'lastName': [this.user.lastName, Validators.required],
      'email': [this.user.email, Validators.required],
      'profileImageUrl': [this.user.profileImageUrl],
    });
  }

  updateUser(): void {
    if (!this.form.valid) {
      const message = 'Not all fields were entered. Fill out required.';
      this.woodburningStoreService.openSnackBar(message, '');
    } else {
      const userFormData = {
        id: this.currentUser.id,
        email: this.form.value.email,
        firstName: this.form.value.firstName,
        lastName: this.form.value.lastName,
        displayName: this.form.value.firstName + ' ' + this.form.value.lastName,
        profileImageUrl: this.form.value.profileImageUrl,
        isDeleted: this.currentUser.isDeleted,
        isAdmin: this.currentUser.isAdmin
      };
      this.userService.update(userFormData);
      const message = 'Successfully edited ' + userFormData.displayName + '.';
      this.woodburningStoreService.openSnackBar(message, '');
      this.dialogRef.close();
    }
  }

  close(): void {
    this.dialogRef.close();
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach(subscription => {
        subscription.unsubscribe();
    });
  }
}
