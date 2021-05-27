import { GeneralCongres, growCongresWithMostCompetentToNumber, thinSelectedRandomlyToNumber } from "./ElectionProcess";
import { createGeneralCongres } from "./GeneratePopulation";
import { selectMostCompetent, selectNumberRandomly } from "./Selection";

let generalCongres = createGeneralCongres(500);

const most_compentent = generalCongres.selectedPeople.reduce(function(prev, current) {
    return (prev.Competence > current.Competence) ? prev : current
}) //returns object

console.log(most_compentent)


function printCongresData(congres: GeneralCongres) {
    console.log(congres.selectedPeople);
    console.log();
}

// TODO Add Family Checks
// TODO Add Data Writing

// 1: 500 > 30 (Random) / Faniliy Members Leave Too
console.log("1: 500 > 30 (Random) / Faniliy Members Leave Too // TODO")
console.log("Selected: " + generalCongres.selectedPeople.length);
console.log();

// 2: 30 > 9 (Random)
console.log(" 2: 30 > 9 (Random)")
thinSelectedRandomlyToNumber(generalCongres, 9)
printCongresData(generalCongres)

// 3: 9 > 40 (Gekwalificeerde meerheid) -> Minstens 7 stemmen
console.log(" 3: 9 > 40 (Gekwalificeerde meerheid) -> Minstens 7 stemmen")
growCongresWithMostCompetentToNumber(generalCongres, 40)
printCongresData(generalCongres)

// 4: 40 > 12 (Random)
console.log(" 2: 30 > 9 (Random)")
thinSelectedRandomlyToNumber(generalCongres, 12)
printCongresData(generalCongres)

// 5: 12 > 25 (Cooptatie) minstens 9 stemmen
console.log("5: 12 > 25 (Cooptatie) minstens 9 stemmen")
growCongresWithMostCompetentToNumber(generalCongres, 25)
printCongresData(generalCongres)

// 6: 25 > 9 (Random)
console.log("6: 25 > 9 (Random)")
thinSelectedRandomlyToNumber(generalCongres, 9)
printCongresData(generalCongres)

// 7: 9 > 45 (Cooptatie) minstens 7 stemmen
console.log("7: 9 > 45 (Cooptatie) minstens 7 stemmen")
growCongresWithMostCompetentToNumber(generalCongres, 45)
printCongresData(generalCongres)

// 8: 45 > 11 (Random)
console.log(" 8: 45 > 11 (Random))")
thinSelectedRandomlyToNumber(generalCongres, 11)
printCongresData(generalCongres)

// 9: 11 > 41 (Cooptatie) Minstens 9 stemmen
console.log("9: 11 > 41 (Cooptatie) Minstens 9 stemmen")
growCongresWithMostCompetentToNumber(generalCongres, 41)
printCongresData(generalCongres)

// 10: 41 > 1 (Conclaaf)
// TODO Write Conclave
console.log("10: 41 > 1 (Conclaaf) TO DO")
thinSelectedRandomlyToNumber(generalCongres, 1)
printCongresData(generalCongres)

