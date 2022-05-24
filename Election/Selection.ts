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

export function cooptPerson(congres: Congres): Person {
    let elligible = congres.getElligiblePeople();
    let most_comptent = elligible.sort((a, b) => (a.$Competence < b.$Competence) ? 1 : -1)
    return most_comptent.shift();
}


export function selectMostCompetent(people: Person[], amount: number): [Person[], Person[]]  {
    people.sort((a, b) => (a.$Competence < b.$Competence) ? 1 : -1)
    let most_compentent = people.splice(0, amount);
    return [most_compentent, people];
}

// Electoral Group, push van een naar de ander