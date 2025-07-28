import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { Register } from './pages/register/register';
import { Login } from './pages/login/login';
import { AuthService } from './services/auth/auth-service';
import { authGuard } from './guards/auth-guard';
import { publicGuard } from './guards/public-guard';

export const routes: Routes = [
    {
        path: 'home', component: Home, canActivate: [authGuard],
    },
    {
        path: 'register', component: Register, canActivate: [publicGuard],
    },
    {
        path: 'login', component: Login, canActivate: [publicGuard]
    }
];
