import {Injectable} from "@angular/core";
import {User} from "./user";
import {Endpoint} from "../shared/endpoint";
import {Http} from "@angular/http";
import "../rxjs-operators";
import {EndpointsService} from "../shared/endpoints.service";
import {RequestService} from "../shared/request.service"

@Injectable()
export class UserService {

    private users: User[];
    private endPoint: Endpoint;

    constructor(private http: Http, private endpointsService: EndpointsService, private requestService: RequestService) {
    }

    init(callback: () => void): void {

        if (undefined != this.endPoint) {
            callback();
        } else {
            this.endpointsService.getEndpoint("admin").then(endPoint => this.setEndpoint(endPoint)).then(callback).catch(this.handleError);
        }
    }

    setEndpoint(endPoint: Endpoint): void {
        this.endPoint = endPoint;
    }

    getUsers(): Promise<User[]> {

        if (undefined != this.users) {
            return Promise.resolve(this.users);
        }

        return this.requestService.request(this.endPoint.url + '/all', "GET")
            .then(response => this.setUsers(response.json()))
            .catch(this.handleError);
    }

    private setUsers(any: any): User[] {
        this.users = any as User[];
        return this.users;
    }

    private handleError(error: any): Promise<any> {
        console.error('An error occurred', error); // TODO - Display safe error
        return Promise.reject(error.message || error);
    }
}