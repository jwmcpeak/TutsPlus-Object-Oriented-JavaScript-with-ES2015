function createPerson(firstName, lastName) {


    var person = {
        get firstName() {
            return firstName;
        },
        get lastName() {
            return lastName;
        },
        greet: function (name) {
            return "Hello, " + name + ". My name is " + firstName;
        }
    };

    return person;
}



var obj = createPerson("John", "Doe");
var obj2 = createPerson("Joe", "Smith");

obj.greet === obj2.greet; // false