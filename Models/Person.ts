// Genes
// Hoeveel hij hoort bij de familie
// Hij strict hij is op Effectivenes
// Charisma

// Threshold voor accepteren om te stemmen

import { Family } from "./Family";

export class Person {

    private Id: number;
    private Competence: number;
    private Family: Family;


    constructor($Id: number, $Competence: number, $Family: Family) {
        this.Id = $Id;
        this.Competence = $Competence;
        this.Family = $Family;
    }


    /**
     * Getter $Id
     * @return {number}
     */
    public get $Id(): number {
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

    calculateMeritOfPerson(other_person: Person): number {
        let other_person_competence = other_person.$Competence;
        let family_favorability = this.Family.getFavorabilityOfFamily(other_person.Family);

        return other_person_competence + family_favorability;
    }


    wouldVoteForPerson(other_person: Person): boolean {
        let other_person_merit = this.calculateMeritOfPerson(other_person);

        return other_person_merit > 750;
    }

    printData() {
        console.log("{ id: " + this.Id + ", Competence: " + this.Competence + ", Family: " + this.Family.$Id + " }")
    }

    voteForBestPerson(selected_people: Person[]): Person {
        let best_person: Person = this;
        let highest_merit = 750;

        selected_people.forEach(person => {
            let merit = this.calculateMeritOfPerson(person);
            if (highest_merit < merit) {
                best_person = person;
            }

        })

        return best_person;
    }





}