import { Component } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase';
import { Observable } from 'rxjs/Observable';
import { AuthService } from '../auth.service';
import { AppUser } from '../models/app-user';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent {
  appUser: AppUser;

  constructor(private authService: AuthService) {
    authService.appUser$.subscribe(appUser => (this.appUser = appUser));
  }

  logout() {
    this.authService.logout();
  }
}
