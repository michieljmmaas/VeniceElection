import { EventTracker } from './Events/EventTracker';
import { Election } from "./Election/Election";
import { Person } from "./Models/Person";
import { createGeneralCongres } from "./Setup/CongresGenerator";
import { readFileSync, writeFileSync, promises as fsPromises } from 'fs';
import { join } from 'path';


let generalCongres = createGeneralCongres(2600, 101);


let people = generalCongres.notSelectedPeople;
let all = people.map(winner => {
  return {
    id: winner.$Id,
    competence: winner.$Competence,
    family: winner.$Family.$Id
  }
})


let winners: Person[] = [];

let eventTracker = new EventTracker();

for (let i = 0; i < 100; i++) {
    let election = new Election(generalCongres, false, eventTracker);
    let winner = election.runElection()
    winners.push(winner);
    eventTracker.print();
    eventTracker.reset();
}


function syncWriteFile(filename: string, data: any) {
  writeFileSync(join(__dirname, filename), data, {
    flag: 'w',
  });

  const contents = readFileSync(join(__dirname, filename), 'utf-8');

  return contents;
}

let all_data = JSON.stringify(all);
syncWriteFile('./Data/all_data.json', all_data);


let formatted_data = winners.map(winner => {
  return {
    id: winner.$Id,
    competence: winner.$Competence,
    family: winner.$Family.$Id
  }
})
let winner_data = JSON.stringify(formatted_data);
syncWriteFile('./Data/winner_data.json', winner_data);

