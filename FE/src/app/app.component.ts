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
  error: boolean = false;
  errorMessage: string = '';

  call(oj: any) {
    this.loadUsers()
  }

  uncall(oj: any) {
    this.products = []
    this.AppService.callUser().subscribe((res) => {
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

  loadUsers() {
    this.AppService.callUser().subscribe((res) => {
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
    )
  }

}
