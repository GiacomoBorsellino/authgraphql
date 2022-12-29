import { Component, OnInit } from '@angular/core';
import { AppService } from './app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {

  constructor(private AppService: AppService) { }

  products: any
  users: any
  error: boolean = false;
  errorMessage: string = '';

  call(objData: any) {
    let data = [];
    data.push(objData)
    console.log('objData: ', objData);

    this.loadUsers(data)
  }

  uncall(objData: any) {
    this.products = []
    this.AppService.callUser(objData).subscribe((res) => {
      if (res.errors) {
        console.log(res.errors[0].extensions.code)
        this.errorMessage = res.errors[0].extensions.code;
        this.error = true;
      } else {
        console.log(res.data.products);

        this.products = res.data.products;
      }
    }
      // , (err) => {
      //   console.log('Catch', err);
      // }
    ).unsubscribe()
  }

  ngOnInit() {
  }

  loadUsers(oj: any) {
    this.AppService.callUser(oj).subscribe((res) => {
      if (res.errors) {
        console.log('err', res.errors[0].message)
        this.errorMessage = res.errors[0].message;
        this.error = true;
      } else {
        console.log(res.data.products);

        // this.products = res.data.products;
        this.users = res.data.users;
        console.log(this.users);
      }
    }
      // , (err) => {
      //   console.log('Catch', err);
      // }
    )
  }

}
