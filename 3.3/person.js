class Person {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }

    greet(name) {
        return "Hello, " + name + ". My name is " + this.firstName;
    }
}

var obj = new Person("John", "Doe");
var obj2 = new Person("Joe", "Smith");

obj instanceof Person; // true

obj.greet === obj2.greet; // true