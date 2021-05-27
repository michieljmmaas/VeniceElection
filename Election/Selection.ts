import { Congres } from "../Models/Congres";
import { Person } from "../Models/Person";

export function selectNumberRandomly(people: Person[], amount: number): [Person[], Person[]]  {
    shuffle(people);
    let excluded_people = people.length - amount;
    let not_selected_people = people.splice(0, excluded_people);
    return [not_selected_people, people];
}

export function shuffle(array: any[]) {
    for (let i = array.length; i; i--) {
        let j = Math.floor(Math.random() * i);
        [array[i - 1], array[j]] = [array[j], array[i - 1]];
    }
}

export function sortPeopleByCompetence(people: Person[]): Person[] {
    return people.sort((a, b) => (a.$Competence < b.$Competence) ? 1 : -1)
}

export function selectByVoting(congres: Congres, new_people_needed: number, minium_amount_of_votes: number)  {
    sortPeopleByCompetence(congres.notSelectedPeople);
    // shuffle(congress.notSelectedPeople); // TODO welke methodes zijn hier

    let newly_selected_people: Person[] = [];
    let not_selected_people: Person[] = [];

    while(newly_selected_people.length < new_people_needed) { // TODO pas op Infinite Loops
        let person_to_propose = congres.notSelectedPeople.shift();
        let proposed_person_is_accepted = congres.suggestPersonForSelection(person_to_propose, minium_amount_of_votes);
        if(proposed_person_is_accepted) {
            newly_selected_people.push(person_to_propose);
        } else {
            not_selected_people.push(person_to_propose)
        }
    }

    congres.notSelectedPeople = congres.notSelectedPeople.concat(not_selected_people)
    congres.selectedPeople = congres.notSelectedPeople.concat(newly_selected_people)
}

export function selectMostCompetent(people: Person[], amount: number): [Person[], Person[]]  {
    sortPeopleByCompetence(people);
    let most_compentent = people.splice(0, amount);
    return [most_compentent, people];
}

// Electoral Group, push van een naar de ander