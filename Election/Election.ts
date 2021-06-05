import { growByVotingForMembers, growCongresWithMostCompetentToNumber, selectBestPerson, selectRandomlyAndRemoveFamily, thinSelectedRandomlyToNumber } from "./ElectionProcess";
import { Congres } from "../Models/Congres";
import { Person } from "../Models/Person";
import { logCongresData } from "../logger";

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
        // selectRandomlyAndRemoveFamily(this.congres, 30)
        // this.printData();

        console.log("2: 30 > 9 (Random)")
        thinSelectedRandomlyToNumber(this.congres, 9)
        this.printData(); 

        console.log("3: 9 > 40 (Gekwalificeerde meerheid) -> Minstens 7 stemmen")
        growByVotingForMembers(this.congres, 40, 7)
        this.printData();

        console.log("2: 30 > 9 (Random)")
        thinSelectedRandomlyToNumber(this.congres, 9)
        this.printData();

        console.log("5: 9 > 25 (Cooptatie) minstens 9 stemmen")
        growByVotingForMembers(this.congres, 25, 9)
        this.printData();

        console.log("6: 25 > 9 (Random)")
        thinSelectedRandomlyToNumber(this.congres, 9)
        this.printData();

        console.log("7: 9 > 45 (Cooptatie) minstens 7 stemmen")
        growByVotingForMembers(this.congres, 45, 7)
        this.printData();

        console.log("8: 45 > 11 (Random))")
        thinSelectedRandomlyToNumber(this.congres, 11)
        this.printData();

        console.log("9: 11 > 41 (Cooptatie) Minstens 9 stemmen")
        growByVotingForMembers(this.congres, 41, 9)
        this.printData();

        // 10: 41 > 1 (Conclaaf)
        // TODO Write Conclave
        console.log("10: 41 > 1 (Conclaaf) TO DO")
        // thinSelectedRandomlyToNumber(this.congres, 1)
        return selectBestPerson(this.congres.selectedPeople)
    }

    // TODO Write Data to file
    printData() {
        if (this.printDebug === true) {
            logCongresData(this.congres);
        }
    }


}