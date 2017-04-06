import {ModuleWithProviders} from "@angular/core";
import {Routes, RouterModule} from "@angular/router";
import {UsersComponent} from "./admin/users.component";

const appRoutes: Routes = [
    {
        path: 'admin',
        component: UsersComponent
    }
];

export const AppRouting: ModuleWithProviders = RouterModule.forRoot(appRoutes);