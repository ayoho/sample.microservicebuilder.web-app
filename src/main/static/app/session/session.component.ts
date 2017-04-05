import {Component, Input, Inject, OnInit, enableProdMode} from "@angular/core";
import {Session} from "./session";

enableProdMode();

@Component({
    selector: 'session',
    templateUrl: 'app/session/session.component.html'
})

export class SessionComponent implements OnInit {
    title = 'Conference Session';
    voted = false;
    @Input() session: Session;

    constructor() {
    }

    ngOnInit(): void {
        let _self = this;
    }

    rateSession(ratingValue: number): void {
      this.voted = true;
    }
}
