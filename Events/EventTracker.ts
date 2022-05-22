import { Person } from "../Models/Person";

export class EventTracker {
    private _events: ElectionEvent[];
    
    public get events(): ElectionEvent[] {
        return this._events;
    }
   
	constructor() {
	}


    public addEvent(event: ElectionEvent): void {
        this.events.push(event);
    }
}

export interface ElectionEvent {
    getStep(): number;
    getPerson(): Person;
    getName(): string;
}