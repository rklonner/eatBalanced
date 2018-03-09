import { Component, OnInit } from '@angular/core';

import { AuthService } from '../auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: 'app-navbar.component.html',
  styles: []
})
export class AppNavbarComponent implements OnInit {

  constructor(public authService: AuthService) { }

  ngOnInit() {
  }

}
