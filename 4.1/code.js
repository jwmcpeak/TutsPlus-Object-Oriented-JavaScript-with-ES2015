function createPerson(firstName, lastName) {
    var person = {
        get firstName() {
            return firstName;
        },
        get lastName() {
            return lastName;
        },
        greet: function (name) {
            return "Hello, " + name + ". My name is " + this.fullName;
        }
    };

    Object.defineProperty(person, "fullName", {
        get: function () { return this.firstName + " " + this.lastName; },
        configurable: true
    });

    return person;
}

function createEmployee(firstName, lastName, position) {
    var person = createPerson(firstName, lastName);
    //var personGreet = person.greet;
    var fullNameDescriptor = Object.getOwnPropertyDescriptor(person, "fullName");
    var fullNameGet = fullNameDescriptor.get.bind(person);


    Object.defineProperty(person, "position", {
        get: function () { return position; }
    });

    Object.defineProperty(person, "fullName", {
        get: function () { return fullNameGet() + ", " + this.position; }
    });

    //person.greet = function (name) {
    //    return personGreet(name) + ", " + this.position;
    //};

    return person;
}