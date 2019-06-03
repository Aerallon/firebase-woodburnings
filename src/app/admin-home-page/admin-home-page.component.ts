import { Component, OnDestroy, OnInit } from '@angular/core';
import { CreateWoodburningComponent } from '../create-woodburning/create-woodburning.component';
import { MatDialog, MatDialogRef } from '@angular/material';
import { AuthService } from '../core/auth.service';
import { UserService } from '../user.service';
import { Subscription } from 'rxjs';

@Component({
    templateUrl: './admin-home-page.component.html',
    styleUrls: ['./admin-home-page.component.scss'],
    selector: 'admin-home-page'
})

export class AdminHomePageComponent implements OnInit, OnDestroy {

  private subscriptions: Subscription[] = [];
  createWoodburningDialogRef: MatDialogRef<CreateWoodburningComponent>;
  isAdmin: boolean;

  constructor(private dialog: MatDialog,
              private authService: AuthService,
              private userService: UserService) {
  }

  ngOnInit(): void {
    this.subscriptions.push(this.userService.get(this.userService.currentUser.id).subscribe( user => {
      this.isAdmin = user.isAdmin;
    }));
  }

  public openCreateWoodburningDialog(): void {
    this.createWoodburningDialogRef = this.dialog.open(CreateWoodburningComponent, { width: '500px' });
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach(subscription => {
        subscription.unsubscribe();
    });
  }
}
