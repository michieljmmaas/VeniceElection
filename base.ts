import { createGeneralCongres } from "./GeneratePopulation";
import { selectNumberRandomly } from "./Selection";

let GeneralCongres = createGeneralCongres(100);

let selection = selectNumberRandomly(GeneralCongres.selectedPeople, 10);

GeneralCongres.notSelectedPeople = selection[0];

// console.log(selection[0]);
// console.log(selection[1].length);
console.log("Not Selected: " +  GeneralCongres.notSelectedPeople.length);
console.log("Selected: " + GeneralCongres.selectedPeople.length);