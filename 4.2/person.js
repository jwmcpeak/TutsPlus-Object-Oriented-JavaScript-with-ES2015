function Person(firstName) {
    this.firstName = firstName;
}

Person.prototype.greet = function (name) {
    return "Hello, " + name + ". My name is " + this.firstName;
};

function Employee(firstName, position) {
    Person.call(this, firstName); // this.firstName = firstName;
    this.position = position;
}

Employee.prototype = Object.create(Person.prototype);

Employee.prototype.greet = function (name) {
    return Person.prototype.greet.call(this, name) + ", " + this.position;
};