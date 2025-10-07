import { Routes } from '@angular/router';
import { LoginComponentComponent } from "./component/login-component/login-component.component";
import { HomeComponentComponent } from "./component/Inicio-component/Inicio-component.component";

export const routes: Routes = [
    {path: '', component: LoginComponentComponent},
    {path: 'Inicio', component: HomeComponentComponent}
];
