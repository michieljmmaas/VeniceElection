import { Person } from "../Models/Person";

export class EventTracker {
    private _events: ElectionEvent[];
    
    public get events(): ElectionEvent[] {
        return this._events;
    }
   
	constructor() {
        this._events = [];
	}

    print(): void {
        this._events.forEach(event => {
            event.print();
        })
    }




    public reset(): void {
        this._events = [];
    }

    public endStep(): void {
        ///
    }


    public addEvent(event: ElectionEvent): void {
        this._events.push(event);
    }
}

export interface ElectionEvent {
    print(): void;
    getStep(): number;
    getPerson(): Person;
    getName(): string;
}