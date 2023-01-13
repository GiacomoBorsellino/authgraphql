import { Component, OnInit } from '@angular/core';
import { UsersService } from '../list-users/users.service';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})

export class EditUserComponent implements OnInit {

  constructor(private UsersService: UsersService) { }

  // Variabili
  id: number;
  email: string;
  password: string;
  roles: any = [];
  // Aggiungere TUTTI i componenti qui
  rolesEdited: any = [
    { nameComponent: 'componenteA', view: false },
    { nameComponent: 'componenteB', view: false },
    { nameComponent: 'componenteC', view: false }
  ];

  error: boolean = false;
  errorMessage: string = '';

  ngOnInit() {
    // Controllo Permessi di Visualizzazione
    let user: any = JSON.parse(localStorage.getItem('user') || '{}');
    let roles = JSON.parse(user.roles ? user.roles : '[]');
    this.roles = roles;
  }

  test(nomeDalComponente: string) {
    for (let i = 0; i < this.roles.length; i++) {
      if (this.roles[i].nameComponent === nomeDalComponente) {
        return this.roles[i].view
      }
    }
  }

  // Gestione Ruoli
  editRole(role: string) {
    // Controllo Permessi di Aggiunta
    this.rolesEdited.map((componente: any) => {
      if (componente.nameComponent === role) {
        componente.view = !componente.view
      }
    })
    console.log(this.rolesEdited);
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
    //       "password": ${this.password}
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
      roles: this.rolesEdited
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
