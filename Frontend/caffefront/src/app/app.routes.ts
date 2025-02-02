import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ServicesComponent } from './services/services.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { FeedbackComponent } from './feedback/feedback.component';
import { ViewFeedbackComponent } from './view-feedback/view-feedback.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { ViewRef } from '@angular/core';
import { ViewRegisterComponent } from './view-register/view-register.component';


export const routes: Routes = [
{path:'',component:HomeComponent},
{path:'services',component:ServicesComponent},
{path:'register',component:RegisterComponent},
{path:'login',component:LoginComponent},
{path:'adminlogin',component:AdminLoginComponent},
{path:'feedback',component:FeedbackComponent},
{path:'vfeedback',component:ViewFeedbackComponent},
{path:'vregister',component:ViewRegisterComponent}



];
