// Genes
// Hoeveel hij hoort bij de familie
// Hij strict hij is op Effectivenes
// Charisma

// Threshold voor accepteren om te stemmen

import { Family } from "./Family";

export class Person {
    private Id: Number;
    private Competence: number;
    private Family: Family;


	constructor($Id: Number, $Competence: number, $Family: Family) {
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
     * @return {number}
     */
	public get $Competence(): number {
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
        let other_person_merit = other_person.$Competence;
        let family_favorability = this.Family.getFavorabilityOfFamily(other_person.$Family);

        return (other_person_merit + family_favorability) > 750;
    }

    printData() {
        console.log("{ id: " + this.Id + ", Competence: " + this.Competence + ", Family: " + this.Family.$Id + " }" )
    }




}