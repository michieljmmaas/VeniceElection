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

      printData() {
        console.log("Congres Data: ")
        this.selectedPeople.forEach(person =>{
            person.printData()
        });
      }

}