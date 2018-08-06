import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

import { UserService } from '../../core/user/user.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  @Input() show: boolean;
  
  constructor(private userService: UserService, private router: Router) { }
  
  ngOnInit() { } 

  logout() {
    this.show = false;
    this.userService.loggof();
    this.router.navigate(['/']);
  }

}
