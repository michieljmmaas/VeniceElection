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


    // TODO Add Family Checks
    // TODO Add Data Writing
    runElection(): Person {
        // console.log("1: 500 > 30 (Random) / Faniliy Members Leave Too // TODO")
        selectOnePersonFromFamily(this.congres, 30)
        // this.printData();

        // 30 differnt people from the 30 families


        // console.log("2: 30 > 9 (Random)")
        thinSelectedRandomlyToNumber(this.congres, this.eventTracker, 9)
        this.eventTracker.endStep();
        this.printData();

        // console.log("3: 9 > 40 (Gekwalificeerde meerheid) -> Minstens 7 stemmen")
        growCongresWithMostCompetentToNumber(this.congres, this.eventTracker, 40)
        this.eventTracker.endStep();
        this.printData();

        // console.log("2: 30 > 9 (Random)")
        thinSelectedRandomlyToNumber(this.congres, this.eventTracker,12)
        this.eventTracker.endStep();
        this.printData();

        // console.log("5: 12 > 25 (Cooptatie) minstens 9 stemmen")
        growCongresWithMostCompetentToNumber(this.congres, this.eventTracker, 25)
        this.eventTracker.endStep();
        this.printData();

        // console.log("6: 25 > 9 (Random)")
        thinSelectedRandomlyToNumber(this.congres, this.eventTracker, 9)
        this.eventTracker.endStep();
        this.printData();

        // console.log("7: 9 > 45 (Cooptatie) minstens 7 stemmen")
        growCongresWithMostCompetentToNumber(this.congres, this.eventTracker, 45)
        this.eventTracker.endStep();
        this.printData();

        // console.log("8: 45 > 11 (Random))")
        thinSelectedRandomlyToNumber(this.congres, this.eventTracker, 11)
        this.eventTracker.endStep();
        this.printData();

        // console.log("9: 11 > 41 (Cooptatie) Minstens 9 stemmen")
        growCongresWithMostCompetentToNumber(this.congres, this.eventTracker, 41)
        this.eventTracker.endStep();
        this.printData();

        // 10: 41 > 1 (Conclaaf)
        // TODO Write Conclave
        // console.log("10: 41 > 1 (Conclaaf) TO DO")
        thinSelectedRandomlyToNumber(this.congres, this.eventTracker, 1)
        this.eventTracker.endStep();
        this.printData();

        return this.congres.selectedPeople[0];
    }

    // TODO Write Data to file
    printData() {
        if (this.printDebug === true) {
            this.congres.printData();
        }
    }


}