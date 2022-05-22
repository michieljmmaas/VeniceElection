import { Person } from "../Models/Person";
import { Family, FamilyRelation } from "../Models/Family";
import { Congres } from "../Models/Congres";


// Love For Family
// Hate for Family
// Hoe veel je me jet je family identificeert
// TODO Name Generator


// Genes is Family. Of een Family over het algemeen slimmer is

// Their intention was to minimize the influence of individual great families,

export function createGeneralCongres(number_of_people: Number, number_of_families: Number): Congres {
    let families = createFamilies(number_of_families);
    let people = createPeople(number_of_people, families);

    let family_ids = people.map(x => parseInt(x.$Family.$Id.toString()));

const counts: any = {};

for (const num of family_ids) {
  counts[num] = counts[num] ? counts[num] + 1 : 1;
}

console.log(counts);




    return new Congres(people, [], families);
}


function createPeople(number_of_people: Number, families: Family[]): Person[] {
    let people: Person[] = []

    let family_pool: Family[] = [];

    families.forEach(family => {
        for(let i = 0; i < family.$Size; i++) {
            family_pool.push(family);
        }
    });

    for (let i = 0; i < number_of_people; i++) {
        let family_id = Math.floor(Math.random() * family_pool.length);
        let random_family = family_pool[family_id];
        people.push(createPerson(i, random_family));
    }

    return people;
}

function createPerson(id: Number, family: Family): Person {
    let random_competence = Math.floor(Math.random() * 1001);
    return new Person(id, random_competence, family);
}


// Paramters
// Verschil in groote families
// Verschil in Animositeit in families
// Factor van Animositeit in Families


// TODO Name Generator for Families. 
// Gebruik dit ook bij Hue
function createFamilies(number_of_families: Number): Family[] {
    let families = [];

    for (let i = 0; i < number_of_families; i++) {
        families.push(createFamily(i, number_of_families));
    }

    return families;
}



function createFamily(id: Number, total_families: Number): Family {
    let family_relations: Map<Number, FamilyRelation>  = new Map();
    
    // TODO Self Hate/Love
    for (let i = 0; i < total_families; i++) {
        if(i === id) {
            family_relations.set(i, {favorability: 1000}) 
        } else {
            let random_favorability = Math.floor(Math.random() * 1001) - 500;
            family_relations.set(i, {favorability: random_favorability})
        }
    }

    let size = Math.round(Math.random() * 10);
    return new Family(id, family_relations, size);
}


