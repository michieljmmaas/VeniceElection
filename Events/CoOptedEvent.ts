import { Person } from '../Models/Person';
import { ElectionEvent } from './EventTracker';

export class CoOptEvent implements ElectionEvent {
    private person: Person;
    private step: number;

	constructor(person: Person, step: number) {
        this.person = person;
        this.step = step;
	}
    setStep(step: number): void {
        this.step = step;
    }
    print(): void {
        console.log("Type: " + this.getName());
    }
    
    getPerson(): Person {
        return this.person;
    }
    getName(): string {
        return "Coopted Randomly";
    }

    getStep(): number {
        return this.step;
    }
}