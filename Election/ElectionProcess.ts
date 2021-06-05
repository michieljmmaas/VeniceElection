import { Congres } from "../Models/Congres";
import { Person } from "../Models/Person";
import { selectByVoting, selectMostCompetent, selectNumberRandomly, shuffle, sortPeopleByCompetence } from "./Selection";



// TODO Add check to enable
export function selectRandomlyAndRemoveFamily(congres: Congres, amount: number) {
    let clonedPeople: Person[] = [...congres.selectedPeople];
    shuffle(clonedPeople);

    let selected_people: Person[] = [];

    for (let i = 0; i < amount; i++) {
        let selected_person = clonedPeople.pop();
        if (selected_person instanceof Person) {
            selected_people.push(selected_person);
            clonedPeople = clonedPeople.filter(person => person!.$Family.$Id !== selected_person!.$Family.$Id);
        }
    }

    let selected_ids = selected_people.map(person => person!.$Id);

    let not_selected_people: Person[] = congres.selectedPeople.filter(person => !selected_ids.includes(person.$Id))

    congres.selectedPeople = selected_people;
    congres.notSelectedPeople = not_selected_people;
}


// TODO zo houden met clonen en dan resetten
export function thinSelectedRandomlyToNumber(congres: Congres, amount: number) {
    let [not_selected_people, selected_people] = selectNumberRandomly(congres.selectedPeople, amount);
    congres.notSelectedPeople = congres.notSelectedPeople.concat(not_selected_people)
}

export function growByVotingForMembers(congres: Congres, amount: number, minium_amount_of_votes_needed: number) {
    let currentAmountSelected = congres.selectedPeople.length;
    let additionalPeopleNeeded = amount - currentAmountSelected;


    selectByVoting(congres, additionalPeopleNeeded, minium_amount_of_votes_needed);
    // congres.selectedPeople = congres.selectedPeople.concat(selectedPeople);
}

// Iedereen kiest beste
export function selectBestPerson(selected_people: Person[]): Person {
    let votes: Person[] = [];

    selected_people.forEach(person => {
        votes.push(person.voteForBestPerson(selected_people));
    });


    return mode(votes);


}

function mode(arr: Person[]): Person {
    return arr.sort((a, b) =>
        arr.filter(v => v === a).length
        - arr.filter(v => v === b).length
    ).pop();
}

export function growCongresWithMostCompetentToNumber(congres: Congres, amount: number) {
    let currentAmountSelected = congres.selectedPeople.length;
    let additionalPeopleNeeded = amount - currentAmountSelected;

    let [most_compentent, not_selected_people] = selectMostCompetent(congres.notSelectedPeople, additionalPeopleNeeded);
    congres.selectedPeople = congres.selectedPeople.concat(most_compentent);
}