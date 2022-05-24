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

	public get $Id(): Number {
		return this.Id;
	}

	public get $Competence(): Number {
		return this.Competence;
	}


	public get $Family(): Family {
		return this.Family;
	}


    printData() {
        console.log("{ id: " + this.Id + ", Competence: " + this.Competence + ", Family: " + this.Family.$Id + " }" )
    }




}