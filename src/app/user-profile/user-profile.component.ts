// src/app/user-profile/user-profile.component.ts

import { Component, OnInit } from '@angular/core';
import { GithubService } from '../github.service';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss'],
})
export class UserProfileComponent implements OnInit {
  username = 'octocat'; // Default username
  userData: any;

  constructor(private githubService: GithubService) {}

  ngOnInit(): void {
    this.getUserData();
  }

  getUserData(): void {
    this.githubService.getUser(this.username).subscribe((data) => {
      this.userData = data;
      console.log(this.userData);
    });
  }
}
