import {ModuleWithProviders} from "@angular/core";
import {Routes, RouterModule} from "@angular/router";
import {SessionsComponent} from "./session/sessions.component";
import {SchedulesComponent} from "./schedule/schedules.component";

const appRoutes: Routes = [
    {
        path: '',
        redirectTo: '/schedules',
        pathMatch: 'full'
    },
    {
        path: 'sessions',
        component: SessionsComponent
    },
    {
        path: 'schedules',
        component: SchedulesComponent
    }
];

export const AppRouting: ModuleWithProviders = RouterModule.forRoot(appRoutes);