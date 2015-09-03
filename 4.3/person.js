export class Person {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }

    get fullName() {
        return this.firstName + " " + this.lastName;
    }

    greet(name) {
        return "Hello, " + name + ". My name is " + this.fullName;
    }
}