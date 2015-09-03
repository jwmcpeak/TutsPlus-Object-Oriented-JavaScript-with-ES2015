var Person = (function() {
    var firstNameSymbol = Symbol();
    var lastNameSymbol = Symbol();

    function Person(firstName, lastName) {
        this[firstNameSymbol] = firstName;
        this[lastNameSymbol] = lastName;
    }

    Person.prototype.greet = function (name) {
        return "Hello, " + name + ". My name is " + this[firstNameSymbol];
    };

    Object.defineProperty(Person.prototype, "firstName", {
        get: function () { return this[firstNameSymbol]; }
    });

    Object.defineProperty(Person.prototype, "lastName", {
        get: function () { return this[lastNameSymbol]; }
    });

    Person.renamePerson = function (person, lastName) {
        person[lastNameSymbol] = lastName;
    };

    return Person;
}());



var obj = new Person("John", "Doe");
var obj2 = new Person("Joe", "Smith");

obj.greet();



obj.greet === obj2.greet; // true