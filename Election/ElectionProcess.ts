import { CoOptEvent } from './../Events/CoOptedEvent';
import { KickRandomEvent } from './../Events/KickRandomEvent';
import { EventTracker } from "../Events/EventTracker";
import { Congres } from "../Models/Congres";
import { Person } from "../Models/Person";
import { selectMostCompetent, selectNumberRandomly, shuffle } from "./Selection";



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
export function thinSelectedRandomlyToNumber(congres: Congres, eventTracker: EventTracker, amount: number) {
    let [not_selected_people, selected_people] = selectNumberRandomly(congres.selectedPeople, amount);
    
    not_selected_people.forEach(person => {
        let kicked_randomly = new KickRandomEvent(person, 0)
        eventTracker.addEvent(kicked_randomly);
    })


    congres.notSelectedPeople = congres.notSelectedPeople.concat(not_selected_people)
}

// Add Family Bias

export function growCongresWithMostCompetentToNumber(congres: Congres, eventTracker: EventTracker, amount: number) {
    let currentAmountSelected = congres.selectedPeople.length;
    let additionalPeopleNeeded = amount - currentAmountSelected;

    let [most_compentent, not_selected_people] = selectMostCompetent(congres.notSelectedPeople, additionalPeopleNeeded);

    most_compentent.forEach(person => {
        let coopt_event = new CoOptEvent(person, 0)
        eventTracker.addEvent(coopt_event);
    })

    congres.selectedPeople = congres.selectedPeople.concat(most_compentent);
}