import { growCongresWithMostCompetentToNumber, selectOnePersonFromFamily, thinSelectedRandomlyToNumber } from "./ElectionProcess";
import { Congres } from "../Models/Congres";
import { Person } from "../Models/Person";
import { EventTracker } from "../Events/EventTracker";

export class Election {

    private congres: Congres;
    private printDebug: boolean;
    private eventTracker: EventTracker;

    constructor($congres: Congres, printDebug: boolean, eventTracker: EventTracker) {
        this.congres = $congres;
        this.printDebug = printDebug;
        this.eventTracker = eventTracker;
    }


    runElection(): Person {
        // 30 differnt people from the 30 families
        selectOnePersonFromFamily(this.congres, 30)

        thinSelectedRandomlyToNumber(this.congres, this.eventTracker, 9)
        this.eventTracker.endStep();

        growCongresWithMostCompetentToNumber(this.congres, this.eventTracker, 40)
        this.eventTracker.endStep();

        thinSelectedRandomlyToNumber(this.congres, this.eventTracker,12)
        this.eventTracker.endStep();

        growCongresWithMostCompetentToNumber(this.congres, this.eventTracker, 25)
        this.eventTracker.endStep();

        thinSelectedRandomlyToNumber(this.congres, this.eventTracker, 9)
        this.eventTracker.endStep();

        growCongresWithMostCompetentToNumber(this.congres, this.eventTracker, 45)
        this.eventTracker.endStep();

        thinSelectedRandomlyToNumber(this.congres, this.eventTracker, 11)
        this.eventTracker.endStep();

        growCongresWithMostCompetentToNumber(this.congres, this.eventTracker, 41)
        this.eventTracker.endStep();

        thinSelectedRandomlyToNumber(this.congres, this.eventTracker, 1)
        this.eventTracker.endStep();

        let most_comptent = this.congres.selectedPeople.sort((a, b) => (a.$Competence < b.$Competence) ? 1 : -1)
        return most_comptent.shift();
    }

    printData() {
        if (this.printDebug === true) {
            this.congres.printData();
        }
    }


}