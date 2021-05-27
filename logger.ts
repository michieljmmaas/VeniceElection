import { Congres } from "./Models/Congres";
import { Person } from "./Models/Person";

export function logCongresData(congres: Congres) {


    console.log("Congres Data: ")
    console.log("\t selected: " + congres.selectedPeople.length);
    console.log("\t not selected: " + congres.notSelectedPeople.length);



    // let grouped = transform(congres.selectedPeople);

    // console.log(grouped)


        // this.selectedPeople.forEach(person => {
        //     person.printData()
        // });


}

// const transform = (array: Person[]) => Object.values(array.reduce(
//     (all, curr) => {
//       const key = curr.$Family.$Id;
//       (all[key] || (all[key] = [])).push(curr);
//       return all;
//     }, {}
//   ))


// function groupByKey(array: any[], key: string) {
//     return array
//       .reduce((hash, obj) => {
//         if(obj[key] === undefined) return hash; 
//         return Object.assign(hash, { [obj[key]]:( hash[obj[key]] || [] ).concat(obj)})
//       }, {})
//  }