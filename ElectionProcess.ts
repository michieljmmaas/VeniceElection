import { Congres } from "./Models/Congres";
import { selectMostCompetent, selectNumberRandomly } from "./Selection";



export function thinSelectedRandomlyToNumber(congres: Congres, amount: number) {
    let [not_selected_people, selected_people] = selectNumberRandomly(congres.selectedPeople, amount);
    congres.notSelectedPeople = congres.notSelectedPeople.concat(not_selected_people)
}

export function growCongresWithMostCompetentToNumber(congres: Congres, amount: number) {
    let currentAmountSelected = congres.selectedPeople.length;
    let additionalPeopleNeeded = amount - currentAmountSelected;

    let [most_compentent, not_selected_people] = selectMostCompetent(congres.notSelectedPeople, additionalPeopleNeeded);
    congres.selectedPeople = congres.selectedPeople.concat(most_compentent);
}