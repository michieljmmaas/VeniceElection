// Genes
// Hoeveel hij hoort bij de familie
// Hij strict hij is op Effectivenes
// Charisma

import { Family } from "./Family";

export class Person {
    private Id: Number;
    private Competence: Number;
    private Family: Family;


	constructor($Id: Number, $Competence: Number, $Family: Family) {
		this.Id = $Id;
		this.Competence = $Competence;
		this.Family = $Family;
	}


    /**
     * Getter $Id
     * @return {Number}
     */
	public get $Id(): Number {
		return this.Id;
	}

    /**
     * Getter $Competence
     * @return {Number}
     */
	public get $Competence(): Number {
		return this.Competence;
	}


    /**
     * Getter $Family
     * @return {Family}
     */
	public get $Family(): Family {
		return this.Family;
	}



    wouldVoteForPerson(other_person: Person): boolean {
        return true;
    }

    printData() {
        console.log("{ id: " + this.Id + ", Competence: " + this.Competence + ", Family: " + this.Family.$Id + " }" )
    }




}