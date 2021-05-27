import { Election } from "./Election/Election";
import { createGeneralCongres } from "./Setup/CongresGenerator";


let generalCongres = createGeneralCongres(500, 50);

const most_compentent = generalCongres.selectedPeople.reduce(function(prev, current) {
    return (prev.$Competence > current.$Competence) ? prev : current
}) //returns object

console.log("Most Compentent")
most_compentent.printData();


let election = new Election(generalCongres, false);
let winner = election.runElection()
console.log("Winner")
winner.printData()



// TODO Kijken procedural generator
// TODO Verschillende verkiezingen strategies
// TODO Keep most Competent actions

