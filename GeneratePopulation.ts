import { GeneralCongres } from "./ElectionProcess";

export interface Person {
    Id: Number;
    Competence: Number;
}

export function createGeneralCongres(size: Number): GeneralCongres {
    let people = []

    for (let i = 0; i < size; i++) {
        let random_competence = Math.floor(Math.random() * 1001);
        people.push({ Id: i, Competence: random_competence });
    }

    return {selectedPeople: people, notSelectedPeople: []};
}