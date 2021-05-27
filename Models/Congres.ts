import { Family } from "./Family";
import { Person } from "./Person";

export class Congres {
    selectedPeople: Person[];
    notSelectedPeople: Person[]
    Families: Family[]

    constructor(selectedPeople: Person[], notSelectedPeople: Person[],  Families: Family[]) {
        this.selectedPeople = selectedPeople;
        this.notSelectedPeople = notSelectedPeople;
        this.Families = Families;
      }

      suggestPersonForSelection(person_to_propose: Person, minium_amount_of_votes: number) {
        let counter = 0;
        this.selectedPeople.forEach(person => {
          if(person.wouldVoteForPerson(person_to_propose)) {
            counter++;
          }
        })

        return counter >= minium_amount_of_votes;
    }


}