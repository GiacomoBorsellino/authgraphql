import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from "@angular/common/http";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { LoginModule } from './login/login.module';
import { ListUsersComponent } from './list-users/list-users.component';

import { FormsModule } from '@angular/forms';
import { EditUserComponent } from './edit-user/edit-user.component';
import { HeaderComponent } from './header/header.component';
import { ComponenteAComponent } from './componente-a/componente-a.component';
import { ComponenteBComponent } from './componente-b/componente-b.component';
import { ComponenteCComponent } from './componente-c/componente-c.component';

import { GraphQLModule } from './graphql.module';


@NgModule({
  declarations: [
    AppComponent,
    ListUsersComponent,
    EditUserComponent,
    HeaderComponent,
    ComponenteAComponent,
    ComponenteBComponent,
    ComponenteCComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    LoginModule,
    FormsModule,
    GraphQLModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
