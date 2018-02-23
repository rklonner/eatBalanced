import { Component, OnInit, Input } from '@angular/core';

import { UserMenuplan } from '../user';

@Component({
  selector: 'app-menuplan-users-select',
  templateUrl: './menuplan-users-select.component.html',
  styleUrls: ['./menuplan-users-select.component.css']
})
export class MenuplanUsersSelectComponent implements OnInit {
  @Input() userMenuplan: UserMenuplan;
  
  constructor() { }

  ngOnInit() {
  }

}
