import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  message: string;
  return: string = '';
  
  constructor(
  public authService: AuthService,
  private router: Router,
  private route: ActivatedRoute) {
    this.message = '';
  }
  
  login(username: string, password: string): void {
    this.message = '';
    if (!this.authService.login(username, password)) {
      this.message = 'Benutzername oder Passwort inkorrect.';
      setTimeout(function() {
        this.message = '';
      }.bind(this), 2500);
    }
	else {
      this.router.navigateByUrl(this.return);
	}
    //return false;
  }
  
  logout(): boolean {
    this.authService.logout();
    return false;
  }

  ngOnInit() {
	// Get the query params
    this.route.queryParams
      .subscribe(params => this.return = params['return'] || '/recipes');
  }

}
