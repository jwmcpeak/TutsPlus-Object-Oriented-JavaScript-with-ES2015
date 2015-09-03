var Person = (function() {
    var map = new WeakMap();

    function Person(firstName, lastName) {
        map.set(this, {
            firstName: firstName,
            lastName: lastName
        });
    }

    Person.prototype.greet = function (name) {
        return "Hello, " + name + ". My name is " + map.get(this).firstName;
    };

    Object.defineProperty(Person.prototype, "firstName", {
        get: function () { return map.get(this).firstName; }
    });

    Object.defineProperty(Person.prototype, "lastName", {
        get: function () { return map.get(this).lastName; }
    });

    Person.renamePerson = function (person, lastName) {
        map.get(this).lastName = lastName;
    };

    return Person;
}());



var obj = new Person("John", "Doe");