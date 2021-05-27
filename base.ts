import { growCongresWithMostCompetentToNumber, thinSelectedRandomlyToNumber } from "./ElectionProcess";
import { createGeneralCongres } from "./GeneratePopulation";


let generalCongres = createGeneralCongres(500, 50);

const most_compentent = generalCongres.selectedPeople.reduce(function(prev, current) {
    return (prev.$Competence > current.$Competence) ? prev : current
}) //returns object


most_compentent.printData();



// TODO Kijken procedural generator
// TODO Verschillende verkiezingen strategies




function runElection() {

// TODO Add Family Checks
// TODO Add Data Writing

// 1: 500 > 30 (Random) / Faniliy Members Leave Too
console.log("1: 500 > 30 (Random) / Faniliy Members Leave Too // TODO")
generalCongres.printData();

// 2: 30 > 9 (Random)
console.log(" 2: 30 > 9 (Random)")
thinSelectedRandomlyToNumber(generalCongres, 9)
generalCongres.printData();

// 3: 9 > 40 (Gekwalificeerde meerheid) -> Minstens 7 stemmen
console.log(" 3: 9 > 40 (Gekwalificeerde meerheid) -> Minstens 7 stemmen")
growCongresWithMostCompetentToNumber(generalCongres, 40)
generalCongres.printData();

// 4: 40 > 12 (Random)
console.log(" 2: 30 > 9 (Random)")
thinSelectedRandomlyToNumber(generalCongres, 12)
generalCongres.printData();

// 5: 12 > 25 (Cooptatie) minstens 9 stemmen
console.log("5: 12 > 25 (Cooptatie) minstens 9 stemmen")
growCongresWithMostCompetentToNumber(generalCongres, 25)
generalCongres.printData();

// 6: 25 > 9 (Random)
console.log("6: 25 > 9 (Random)")
thinSelectedRandomlyToNumber(generalCongres, 9)
generalCongres.printData();

// 7: 9 > 45 (Cooptatie) minstens 7 stemmen
console.log("7: 9 > 45 (Cooptatie) minstens 7 stemmen")
growCongresWithMostCompetentToNumber(generalCongres, 45)
generalCongres.printData();

// 8: 45 > 11 (Random)
console.log(" 8: 45 > 11 (Random))")
thinSelectedRandomlyToNumber(generalCongres, 11)
generalCongres.printData();

// 9: 11 > 41 (Cooptatie) Minstens 9 stemmen
console.log("9: 11 > 41 (Cooptatie) Minstens 9 stemmen")
growCongresWithMostCompetentToNumber(generalCongres, 41)
generalCongres.printData();

// 10: 41 > 1 (Conclaaf)
// TODO Write Conclave
console.log("10: 41 > 1 (Conclaaf) TO DO")
thinSelectedRandomlyToNumber(generalCongres, 1)
generalCongres.printData();

}

runElection();