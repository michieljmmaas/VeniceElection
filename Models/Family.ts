export class Family {
    private Id: Number;
    private Size: Number;
   
	constructor($Id: Number, $Size: Number) {
		this.Id = $Id;
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
}