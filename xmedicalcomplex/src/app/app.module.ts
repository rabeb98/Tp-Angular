import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule }    from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

// used to create fake backend
import { fakeBackendProvider } from './_helpers';
import { DepartmentsComponent } from './departments/departments.component';
import { NewsletterComponent } from './newsletter/newsletter.component';
import { AppointmentComponent } from './appointment/appointment.component';
import { AboutComponent } from './about/about.component';
import { LoadersComponent } from './loaders/loaders.component';
import { NgCircleProgressModule } from 'ng-circle-progress';

import { AppComponent }  from './app.component';
import { routing }        from './app.routing';

import { AlertComponent } from './_directives';
import { AuthGuard } from './_guards';
import { JwtInterceptor, ErrorInterceptor } from './_helpers';
import { AlertService, AuthenticationService, UserService } from './_services';
import { HomeComponent } from './home';
import { LoginComponent } from './login';
import { RegisterComponent } from './register';
import { DashboardComponent } from './dashboard/dashboard.component';

@NgModule({
    imports: [
        BrowserModule,
        ReactiveFormsModule,
        HttpClientModule,
        routing,
        FormsModule,
        NgCircleProgressModule.forRoot({
            radius: 80,
            space: -4,
            outerStrokeGradient: true,
            outerStrokeWidth: 4,
            outerStrokeColor: '#4882c2',
            outerStrokeGradientStopColor: '#53a9ff',
            innerStrokeColor: '#e7e8ea',
            innerStrokeWidth: 4,
            title: 'auto',
            titleFontSize: '30',
            animateTitle: true,
            outerStrokeLinecap: 'square',
            showSubtitle: false,
            unitsFontSize: '30',
            animationDuration: 300,
            showUnits: true,
            showBackground: false,
            clockwise: true,
            startFromZero: true,
            showZeroOuterStroke: true,
            backgroundGradient: true
        })

    ],
    declarations: [
        AppComponent,
        AlertComponent,
        HomeComponent,
        LoginComponent,
        RegisterComponent,
        DepartmentsComponent,
        NewsletterComponent,
        AppointmentComponent,
        AboutComponent,
        LoadersComponent,
        DashboardComponent

    ],
    providers: [
        AuthGuard,
        AlertService,
        AuthenticationService,
        UserService,
        { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
        { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },

        // provider used to create fake backend
        fakeBackendProvider
    ],
    bootstrap: [AppComponent]
})

export class AppModule { }
