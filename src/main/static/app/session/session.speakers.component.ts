import {Component, Input, enableProdMode, OnChanges, SimpleChanges} from "@angular/core";
import {Router} from "@angular/router";

enableProdMode();

@Component({
    selector: 'session-speakers',
    templateUrl: 'app/session/session.speakers.component.html'
})

export class SessionSpeakersComponent implements OnChanges {
    title = 'Conference Session Speakers';
    @Input() speakerIds: string[];

    constructor(private router: Router) {
    }

    ngOnChanges(changes: SimpleChanges) {
//        if (undefined == changes['speakerIds'].currentValue
//            || undefined == changes['speakerIds'].previousValue
//            || changes['speakerIds'].currentValue.toString() != changes['speakerIds'].previousValue.toString()) {
//
//            if (undefined != this.speakerIds) {
//                var _self = this;
//            }
//
//        }
    }

    onSelect(): void {
    }
}