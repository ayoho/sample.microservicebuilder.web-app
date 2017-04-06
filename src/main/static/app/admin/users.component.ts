import {Component, enableProdMode, OnInit, ViewChild} from "@angular/core";
import {Router} from "@angular/router";
import {User} from "./user";
import {UserService} from "./user.service";

enableProdMode();

@Component({
    selector: 'admin',
    templateUrl: 'app/admin/users.component.html'
})

export class UsersComponent implements OnInit {

    title = 'Users';
    users: User[];
    data: string;

    constructor(private router: Router, private userService: UserService) {
    }

    ngOnInit(): void {
        let _self = this;
        this.userService.init(function () {
            _self.getUsers();
        });
    }

    getUsers(): void {
        this.userService.getUsers().then(users => {
            this.setUsers(users);
        }).catch(UsersComponent.handleError);
    }

    setUsers(users: User[]): void {
        this.users = users;
        this.data = JSON.stringify(this.users, null, 3);
    }

    private static handleError(error: any): Promise<any> {
        console.error('An error occurred', error); // TODO - Display safe error
        return Promise.reject(error.message || error);
    }
}