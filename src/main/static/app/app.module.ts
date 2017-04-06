import
{NgModule} from "@angular/core";
import {BrowserModule} from "@angular/platform-browser";
import {FormsModule} from "@angular/forms";
import {HttpModule, JsonpModule } from "@angular/http";
import {AppComponent} from "./app.component";
import {AppRouting} from "./app.routing";
import {UsersComponent} from "./admin/users.component";
import {UserService} from "./admin/user.service";
import {EndpointsService} from "./shared/endpoints.service";
import {JwtService} from "./shared/jwt.service";
import {RequestService} from "./shared/request.service";

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        JsonpModule,
        AppRouting
    ],
    declarations: [
        AppComponent,
        UsersComponent
    ],
    providers: [
        EndpointsService,
        JwtService,
        RequestService,
        UserService
    ],
    bootstrap: [
        AppComponent
    ]
})

export class AppModule {
}