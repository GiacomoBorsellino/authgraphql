import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})

export class HeaderComponent implements OnInit {

  constructor(private router: Router) { }

  user: any;
  userCheck: boolean = false;

  ngOnInit() {
    this.user = JSON.parse(localStorage.getItem('user') || '{}');
    this.userCheck = Object.keys(this.user).length === 0
  }

  routing(route: string) {
    this.router.navigate(['/', route])
  }

  logout() {
    localStorage.clear()
    location.reload();
  }
}
