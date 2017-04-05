import {Injectable, Pipe, PipeTransform} from "@angular/core";
import {Session} from "./session";

@Pipe({
    name: 'sessionFilterSpeaker'
})
@Injectable()
export class SessionFilterSpeaker implements PipeTransform {

    transform(sessions: Session[]): Session[] {
        if (undefined === sessions) {
            return <Session[]>[];
        }

        return sessions.filter(session => this.likeSession(session));
    }

    private likeSession(session: Session): boolean {
        return false;
    }
}
