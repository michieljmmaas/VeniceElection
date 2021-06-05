// Genes:
// Hoeveel haat ze hebben
// Hoe groot de familie maximaal is
// -> Genen die het afdraag aan de familiy leden


// Vriendschappen tussen Families, aversy is nu random
export interface FamilyRelation {
    favorability: number;
}


export class Family {
    private Id: number;
    private FamiliyRelations: Map<Number, FamilyRelation>;

    constructor($Id: number, $FamiliyRelations: Map<number, FamilyRelation>) {
        this.Id = $Id;
        this.FamiliyRelations = $FamiliyRelations;
    }



    /**
     * Getter $Id
     * @return {number}
     */
    public get $Id(): number {
        return this.Id;
    }


    public getFavorabilityOfFamily(family: Family): number {
        if (this.FamiliyRelations.has(family.Id)) {
            return this.FamiliyRelations.get(family.Id).favorability;
        } else {
            console.log("FAMILY NOT FOUND")
            return 0;
        }
    }
}