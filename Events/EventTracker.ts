import { Person } from "../Models/Person";

export class EventTracker {
    private new_events: ElectionEvent[];
    private _events: ElectionEvent[];
    private step: number;
    
    public get events(): ElectionEvent[] {
        return this._events;
    }
   
	constructor() {
        this._events = [];
        this.new_events = [];
        this.step = 0;
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
        this.new_events.map(event => event.setStep(this.step))
        this.step = this.step + 1;
        this.events.concat(this.new_events);
        this.new_events = [];
    }


    public addEvent(event: ElectionEvent): void {
        this.new_events.push(event);
    }
}

export interface ElectionEvent {
    setStep(step: number): void;
    print(): void;
    getStep(): number;
    getPerson(): Person;
    getName(): string;
}