import { EventTracker } from './Events/EventTracker';
import { Family } from './Models/Family';
import { Election } from "./Election/Election";
import { Person } from "./Models/Person";
import { createGeneralCongres } from "./Setup/CongresGenerator";
import { readFileSync, writeFileSync, promises as fsPromises } from 'fs';
import { join } from 'path';


let generalCongres = createGeneralCongres(2600, 101);

const most_compentent = generalCongres.notSelectedPeople.reduce(function (prev, current) {
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

let formatted_data = winners.map(winner => {
  return {
    id: winner.$Id,
    competence: winner.$Competence,
    family: winner.$Family.$Id
  }
})

let data = JSON.stringify(formatted_data);


function syncWriteFile(filename: string, data: any) {
  /**
   * flags:
   *  - w = Open file for reading and writing. File is created if not exists
   *  - a+ = Open file for reading and appending. The file is created if not exists
   */
  writeFileSync(join(__dirname, filename), data, {
    flag: 'w',
  });

  const contents = readFileSync(join(__dirname, filename), 'utf-8');

  return contents;
}


syncWriteFile('./Data/example.json', data);

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