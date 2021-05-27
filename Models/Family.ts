// Genes:
// Hoeveel haat ze hebben
// Hoe groot de familie maximaal is
// -> Genen die het afdraag aan de familiy leden


// Vriendschappen tussen Families, aversy is nu random
export interface FamilyRelation {
    favorability: number;
}


export class Family {
    private Id: Number;
    private FamiliyRelations: Map<Number, FamilyRelation>;

	constructor($Id: Number, $FamiliyRelations: Map<Number, FamilyRelation>) {
		this.Id = $Id;
		this.FamiliyRelations = $FamiliyRelations;
	}



    /**
     * Getter $Id
     * @return {Number}
     */
	public get $Id(): Number {
		return this.Id;
	}


    public getFavorabilityOfFamily(family: Family): number {
        if(this.FamiliyRelations.has(family.Id)) {
            return this.FamiliyRelations.get(family.Id).favorability;
        } else {
            console.log("FAMILY NOT FOUND")
            return 0;
        }
    }
}