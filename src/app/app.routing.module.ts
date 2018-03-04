import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SampleComponent } from './sample/sample.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
    {path: '', component: LoginPageComponent},
    {path : 'register', component: RegisterComponent},
    {path: 'sample', component: SampleComponent}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutinModule { }

export const routingComponents = [LoginPageComponent, RegisterComponent, SampleComponent]

