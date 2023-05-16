import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

import { ProfileService } from './profile.service';
import { LP_User } from '../course/model/lp_user.model';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent {
  user: LP_User = {} as LP_User;
  constructor(private profileService: ProfileService) {}

  onSubmit(form: NgForm) {
    this.profileService.getUser(form.value.email).subscribe({
      next: (data) => {
        this.user = data;
      },
      error: (err) => {
        console.error('something wrong occurred: ' + err);
      }
    });
    form.resetForm();
  }
}
