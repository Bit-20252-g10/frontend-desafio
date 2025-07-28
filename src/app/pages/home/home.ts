// src/app/pages/home/home.component.ts
import { Component, OnInit, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { AuthService } from '../../services/auth/auth-service';
import { User } from '../../interfaces/auth.interface';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.html',
  styleUrl: './home.css',
  schemas: [CUSTOM_ELEMENTS_SCHEMA] // no valide los elementos y atributos personalizados
})
export class Home implements OnInit {

  usersList : User[] = [];

  constructor(private authService: AuthService, private router: Router){

    this.getAllUsers();
    console.log(this.authService.isLoggedIn())
  }

  ngOnInit(): void {
    this.getAllUsers();
    console.log(this.authService.isLoggedIn());
  }

  getAllUsers() {
    this.authService.getAllUsers().subscribe(
      response => {
        console.log(response);
        this.usersList = response;
      },
      error => {
        console.error('Error al obtener usuarios:', error);
      }
    );
  }
  logout(): void{
    this.authService.logout();
    this.router.navigate(['/login']);
  }
}
