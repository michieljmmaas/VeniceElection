import { Person } from '../Models/Person';
import { ElectionEvent } from './EventTracker';

export class KickRandomEvent implements ElectionEvent {
    private person: Person;
    private step: number;
    
   
	constructor(person: Person, step: number) {
        this.person = person;
        this.step = step;
	}
    getPerson(): Person {
        return this.person;
    }
    getName(): string {
        return "Kicked Randomly";
    }

    getStep(): number {
        return this.step;
    }
}