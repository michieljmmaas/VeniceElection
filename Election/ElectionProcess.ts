import { CoOptEvent } from './../Events/CoOptedEvent';
import { KickRandomEvent } from './../Events/KickRandomEvent';
import { EventTracker } from "../Events/EventTracker";
import { Congres } from "../Models/Congres";
import { Person } from "../Models/Person";
import { cooptPerson, selectNumberRandomly, shuffle } from "./Selection";



// TODO Add check to enable
export function selectOnePersonFromFamily(congres: Congres, amount: number) {
    let not_selected_people: Person[] = [...congres.notSelectedPeople];

    let families = not_selected_people.map(person => person.$Family.$Id);
    shuffle(families);

    let selected_families = families.slice(0, amount);

    let selected_people: Person[] = [];

    selected_families.forEach(family_id => {
        let person = not_selected_people.find(person => person.$Family.$Id === family_id);
        selected_people.push(person);
    })

    let selected_person_ids = selected_people.map(person => person.$Id);

    let filtered_not_selected = not_selected_people.filter(person => selected_person_ids.includes(person.$Id) === false);

    congres.selectedPeople = selected_people;
    congres.notSelectedPeople = filtered_not_selected;
}


// TODO zo houden met clonen en dan resetten
export function thinSelectedRandomlyToNumber(congres: Congres, eventTracker: EventTracker, amount: number) {
    let [not_selected_people, selected_people] = selectNumberRandomly(congres.selectedPeople, amount);
    
    not_selected_people.forEach(person => {
        let kicked_randomly = new KickRandomEvent(person, 0)
        eventTracker.addEvent(kicked_randomly);
    })


    congres.notSelectedPeople = congres.notSelectedPeople.concat(not_selected_people)
    congres.selectedPeople = congres.selectedPeople.concat(selected_people)
}

// Add Family Bias

export function growCongresWithMostCompetentToNumber(congres: Congres, eventTracker: EventTracker, amount: number) {
    let currentAmountSelected = congres.selectedPeople.length;
    let additionalPeopleNeeded = amount - currentAmountSelected;

    for (let i = 0; i < additionalPeopleNeeded; i++) {
        let new_person = cooptPerson(congres);
        let coopt_event = new CoOptEvent(new_person, 0)
        eventTracker.addEvent(coopt_event);
        congres.selectPerson(new_person);
    }
}