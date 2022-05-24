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

   selectPerson(new_person: Person) {
     this.selectedPeople.push(new_person);
     this.notSelectedPeople = this.notSelectedPeople.filter(person => person.$Id !== new_person.$Id);
}

getElligiblePeople(): Person[] {
  let selected_families = this.getSelectedFamilyIds();
  return this.notSelectedPeople.filter(person => !selected_families.includes(person.$Family.$Id))
}


   getSelectedFamilyIds() {
    return this.selectedPeople.map(person => person.$Family.$Id);
   }

      printData() {
        console.log("Congres Data: ")
        this.selectedPeople.forEach(person =>{
            person.printData()
        });
      }

}