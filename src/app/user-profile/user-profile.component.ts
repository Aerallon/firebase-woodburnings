import { Component, Input, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';
import { UserService } from '../user.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AppUser } from '../interfaces';
import { WoodburningStoreService } from '../woodburning-store.service';

@Component({
    templateUrl: './user-profile.component.html',
    styleUrls: ['./user-profile.component.scss'],
    selector: 'user-profile'
})

export class UserProfileComponent implements OnInit {

  form: FormGroup;
  @Input() user: AppUser;

  constructor(private formBuilder: FormBuilder,
              public dialogRef: MatDialogRef<UserProfileComponent>,
              private userService: UserService,
              private woodburningStoreService: WoodburningStoreService) {
  }

  ngOnInit(): void {
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
        id: this.user.id,
        email: this.form.value.email,
        firstName: this.form.value.firstName,
        lastName: this.form.value.lastName,
        displayName: this.form.value.firstName + ' ' + this.form.value.lastName,
        profileImageUrl: this.form.value.profileImageUrl,
        isDeleted: this.user.isDeleted,
        isAdmin: this.user.isAdmin
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
}
