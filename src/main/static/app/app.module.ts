import
{NgModule} from "@angular/core";
import {BrowserModule} from "@angular/platform-browser";
import {FormsModule} from "@angular/forms";
import {HttpModule, JsonpModule } from "@angular/http";
import {AppComponent} from "./app.component";
import {AppRouting} from "./app.routing";
import {ScheduleModule} from 'primeng/primeng';
import {SessionsComponent} from "./session/sessions.component";
import {SessionComponent} from "./session/session.component";
import {SessionService} from "./session/session.service";
import {SchedulesComponent} from "./schedule/schedules.component";
import {ScheduleComponent} from "./schedule/schedule.component";
import {ScheduleService} from "./schedule/schedule.service";
import {EndpointsService} from "./shared/endpoints.service";
import {JwtService} from "./shared/jwt.service";
import {RequestService} from "./shared/request.service";
import {SessionFilter} from "./session/session.filter";
import {SessionFilterSpeaker} from "./session/session.filter.speaker";
import {SessionSpeakersComponent} from "./session/session.speakers.component";
import {MomentModule} from 'angular2-moment';
import {ChartModule} from 'primeng/primeng';

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        JsonpModule,
        ScheduleModule,
        AppRouting,
        MomentModule,
        ChartModule,
    ],
    declarations: [
        AppComponent,
        SessionsComponent,
        SessionComponent,
        SessionSpeakersComponent,
        SchedulesComponent,
        ScheduleComponent,
        SessionFilter,
        SessionFilterSpeaker
    ],
    providers: [
        EndpointsService,
        JwtService,
        RequestService,
        SessionService,
        ScheduleService
    ],
    bootstrap: [
        AppComponent
    ]
})

export class AppModule {
}