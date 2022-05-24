import { Person } from "../Models/Person";
import { Family } from "../Models/Family";
import { Congres } from "../Models/Congres";

export function createGeneralCongres(number_of_people: Number, number_of_families: Number): Congres {
    let families = createFamilies(number_of_families);
    let people = createPeople(number_of_people, families);
    return new Congres([], people, families);
}


function createPeople(number_of_people: Number, families: Family[]): Person[] {
    let people: Person[] = []

    let family_pool: Family[] = [];

    families.forEach(family => {
        for(let i = 0; i < family.$Size; i++) {
            family_pool.push(family);
        }
    });

    let id = 0;

    families.forEach(fam => {
        people.push(createPerson(id, fam));
        id++;
    })
    
    for (let i = 0; i < number_of_people.valueOf() - families.length; i++) {
        let family_id = Math.floor(Math.random() * family_pool.length);
        let random_family = family_pool[family_id];
        people.push(createPerson(id, random_family));
        id++;
    }

    return people;
}

function createPerson(id: Number, family: Family): Person {
    let random_competence = Math.floor(Math.random() * 1001);
    return new Person(id, random_competence, family);
}


function createFamilies(number_of_families: Number): Family[] {
    let families = [];

    for (let i = 0; i < number_of_families; i++) {
        families.push(createFamily(i));
    }

    return families;
}

function createFamily(id: Number): Family {
    let size = Math.round(Math.random() * 10);
    return new Family(id, size);
}


