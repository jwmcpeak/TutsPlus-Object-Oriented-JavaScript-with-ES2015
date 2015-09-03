import {Person} from "person.js";

export class Employee extends Person {
    constructor(firstName, lastName, position) {
        super(firstName, lastName);
        this.position = position;
    }

    get fullName() {
        return super.fullName + ", " + this.position;
    }

    //greet(name) {
    //    return super.greet(name) + ", " + this.position;
    //}
}