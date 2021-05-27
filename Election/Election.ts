import { growCongresWithMostCompetentToNumber, thinSelectedRandomlyToNumber } from "../ElectionProcess";
import { Congres } from "../Models/Congres";
import { Person } from "../Models/Person";

export class Election {

    private congres: Congres;
    private printDebug: boolean;



    constructor($congres: Congres, printDebug: boolean) {
        this.congres = $congres;
        this.printDebug = printDebug;
    }


    // TODO Add Family Checks
    // TODO Add Data Writing
    runElection(): Person {
        // console.log("1: 500 > 30 (Random) / Faniliy Members Leave Too // TODO")
        this.printData();

        // console.log("2: 30 > 9 (Random)")
        thinSelectedRandomlyToNumber(this.congres, 9)
        this.printData();

        // console.log("3: 9 > 40 (Gekwalificeerde meerheid) -> Minstens 7 stemmen")
        growCongresWithMostCompetentToNumber(this.congres, 40)
        this.printData();

        // console.log("2: 30 > 9 (Random)")
        thinSelectedRandomlyToNumber(this.congres, 12)
        this.printData();

        // console.log("5: 12 > 25 (Cooptatie) minstens 9 stemmen")
        growCongresWithMostCompetentToNumber(this.congres, 25)
        this.printData();

        // console.log("6: 25 > 9 (Random)")
        thinSelectedRandomlyToNumber(this.congres, 9)
        this.printData();

        // console.log("7: 9 > 45 (Cooptatie) minstens 7 stemmen")
        growCongresWithMostCompetentToNumber(this.congres, 45)
        this.printData();

        // console.log("8: 45 > 11 (Random))")
        thinSelectedRandomlyToNumber(this.congres, 11)
        this.printData();

        // console.log("9: 11 > 41 (Cooptatie) Minstens 9 stemmen")
        growCongresWithMostCompetentToNumber(this.congres, 41)
        this.printData();

        // 10: 41 > 1 (Conclaaf)
        // TODO Write Conclave
        // console.log("10: 41 > 1 (Conclaaf) TO DO")
        thinSelectedRandomlyToNumber(this.congres, 1)
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