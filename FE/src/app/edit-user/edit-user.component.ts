import { Component, OnInit } from '@angular/core';
import { UsersService } from '../list-users/users.service';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})

export class EditUserComponent implements OnInit {

  constructor(private UsersService: UsersService) { }

  /* 
  Ogni volta che aggiungi un componente: 
  1)
  */

  ngOnInit() {
    // Controllo Permessi di Visualizzazione
    let user: any = JSON.parse(localStorage.getItem('user') || '{}');
    let roles = JSON.parse(user.roles)
    this.roles = roles;
    console.log(this.roles);

    this.test
  }

  test(nomeDalComponente: any) {
    this.roles.forEach((role: any) => {
      if (nomeDalComponente === role.nameComponent) {
        console.log(role.view);
        return role.view;
      } else {
        return false;
      }
    })
  }

  // Variabili
  id: number;
  email: string;
  password: string;
  roles: any;
  error: boolean = false;
  errorMessage: string = '';

  // Gestione Ruoli
  editRole(role: string) {
    // Controllo Permessi di Aggiunta
    // Aggiungere nuovi componente qui
    let roles = [
      { nameComponent: 'componenteA', view: false },
      { nameComponent: 'componenteB', view: false },
      { nameComponent: 'componenteC', view: false }
    ];
    roles.map((componente: any) => {
      if (componente.nameComponent === role) {
        componente.view = !componente.view
      }
    })
    console.log(this.roles);
  }

  addUser() {
    console.log(this.email, this.password);

    let data = {
      email: this.email,
      password: this.password
    }

    this.UsersService.addUser(data).subscribe((res) => {
      console.log('added data: ', res)
    })

    // Chiamata "Classica"
    // let objData = `
    //   {
    //     "input": {
    //       "email": ${this.email}, 
    //       "ip_address": ${this.password}
    //     }
    //   }
    // `
    // console.log(objData);
    // this.UsersService.addUser(objData).subscribe((res) => {
    //   if (res.errors) {
    //     console.log('err', res.errors[0].message)
    //     this.errorMessage = res.errors[0].message;
    //     this.error = true;
    //   } else {
    //     console.log(res.data.products);

    //     // this.products = res.data.products;
    //     this.user = res.data.users;
    //     console.log(this.user);
    //   }
    // })
  }

  updateUser() {
    console.log(this.email, this.password);

    let data = {
      id: this.id,
      email: this.email,
      password: this.password,
      roles: this.roles
    }

    this.UsersService.updateUser(data).subscribe((res) => {
      console.log('updated data: ', res)
    })
  }

  deleteUser() {
    console.log(this.email, this.password);

    let data = {
      id: this.id
    }

    this.UsersService.deleteUser(data).subscribe((res) => {
      console.log('deleted data: ', res)
    })
  }
}
