import { Component, OnInit } from '@angular/core';
import { AppService } from './app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {

  constructor(private AppService: AppService) { }

  users: any
  error: boolean = false;
  errorMessage: string = '';
  body2: any = []

  body = {
    users: {
      users: [],

    }
  }

  call(oj: any) {
    console.log(oj);
    this.body2.push(oj)
    console.log(this.body);
    this.loadUsers(this.body)
  }

  ngOnInit() {
  }

  loadUsers(data: any) {
    this.AppService.callUser(data).subscribe((res) => {
      if (res.errors) {
        console.log(res.errors[0].extensions.code)
        this.errorMessage = res.errors[0].extensions.code;
        this.error = true;
      } else {
        this.users = res.data.users;
      }
    }
      // , (err) => {
      //   console.log('Catch', err);
      // }
    )
  }

}
