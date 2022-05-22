// Genes:
// Hoeveel haat ze hebben
// Hoe groot de familie maximaal is
// -> Genen die het afdraag aan de familiy leden


// Vriendschappen tussen Families, aversy is nu random
export interface FamilyRelation {
    favorability: Number;
}


export class Family {
    private Id: Number;
    private FamiliyRelations: Map<Number, FamilyRelation>;
    private Size: Number;
   
	constructor($Id: Number, $FamiliyRelations: Map<Number, FamilyRelation>, $Size: Number) {
		this.Id = $Id;
		this.FamiliyRelations = $FamiliyRelations;
        this.Size = $Size;
	}

    public get $Size(): Number {
        return this.Size;
    }

    /**
     * Getter $Id
     * @return {Number}
     */
	public get $Id(): Number {
		return this.Id;
	}


    // getFavorabilityOfFamily(family: Family): Number {
    //     if(this.FamiliyRelations.has(family.Id)) {
    //         return this.FamiliyRelations.get(family.Id).favorability;
    //     } else {
    //         console.log("FAMILY NOT FOUND")
    //         return 0;
    //     }
    // }
}