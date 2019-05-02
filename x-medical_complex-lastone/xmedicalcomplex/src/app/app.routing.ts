import { Routes, RouterModule } from '@angular/router';
import {AboutComponent} from './about/about.component';
import { HomeComponent } from './home';
import { LoginComponent } from './login';
import { DashboardComponent } from './dashboard/dashboard.component';
import { RegisterComponent } from './register';
import { AuthGuard } from './_guards';
import { AdminGuard } from './_guards';

const appRoutes: Routes = [
    { path: 'appoint', component: HomeComponent, canActivate: [AuthGuard] },
    { path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard] },
    { path: 'logout', component: HomeComponent, canActivate: [AuthGuard] },
    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterComponent },
    { path: 'about', component: AboutComponent},
    { path: '', component: HomeComponent},
    { path: 'home', component: HomeComponent},

    // otherwise redirect to home
    { path: '**', redirectTo: '' }
];

export const routing = RouterModule.forRoot(appRoutes);
