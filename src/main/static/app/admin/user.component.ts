import {Component, Input, enableProdMode} from "@angular/core";
import {User} from "./user";

enableProdMode();

@Component({
    selector: 'admin',
    templateUrl: 'app/admin/user.component.html'
})

export class UserComponent {
    title = 'Conference Users';
    @Input()
    user: User;
}