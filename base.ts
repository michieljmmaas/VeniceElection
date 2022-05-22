import { EventTracker } from './Events/EventTracker';
import { Family } from './Models/Family';
import { Election } from "./Election/Election";
import { Person } from "./Models/Person";
import { createGeneralCongres } from "./Setup/CongresGenerator";


let generalCongres = createGeneralCongres(480, 12);

const most_compentent = generalCongres.selectedPeople.reduce(function (prev, current) {
    return (prev.$Competence > current.$Competence) ? prev : current
}) //returns object

// console.log("Most Compentent")
// most_compentent.printData();

let winners: Person[] = [];

let eventTracker = new EventTracker();

for (let i = 0; i < 25; i++) {
    let election = new Election(generalCongres, false, eventTracker);
    let winner = election.runElection()
    // winner.printData()
    winners.push(winner);
    eventTracker.print();
    eventTracker.reset();
}

// console.log("Winners")
// winners.forEach(winner => winner.printData())

let family_ids = winners.map(x => parseInt(x.$Family.$Id.toString()));

const counts: any = {};

for (const num of family_ids) {
  counts[num] = counts[num] ? counts[num] + 1 : 1;
}

// console.log(counts);

generalCongres.Families


// const groupByCategory = winners.reduce((group: , person) => {
//     const Family = person.$Family;
//     let id = Family.$Id.toString();
//     group[id] = group[id] ?? [];
//     group[id].push(person);
//     return group;
//   }, {});

// console.log(groupByCategory);


// https://en.wikisource.org/wiki/1911_Encyclop%C3%A6dia_Britannica/Doge
// TODO Kijken procedural generator
// TODO Verschillende verkiezingen strategies
// TODO Keep track of actions
// Wie wordt eruit gestuurd

// TODO -> Kijken naar Visualisatie
// TODO -> Haat/Liefde voor Visualisatie
// TODO -> Kijken naar Gilden
// TODO -> Parameters meegeven voor opties
// TODO -> Genen voor Families (Meer liefde, meer Charisma / Meer Competence / Bouw naar MVP)

// Visualisatie
// Meest Capabele
// Meerdere keren runnen en zien wie het meeste kans hebben
// Kijken wat het grootste probleem is
// Tevrendeheids score?


///// Kijken of ik kan tunen
// Traits van Families (Kleur / Logo)
// -> Size
// -> Values
//      -> Charisma / Family / Competence
// -> Bonden met andere families
// - > Gilden van Families
// ===
// Family Member
// -> Familie
// -> Charisma score
// -> Competence score