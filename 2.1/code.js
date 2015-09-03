// Boolean
// String
// Number
// Undefined
// Null
// Symbol

var length = "hello".length;
var length2 = new String("hello").length;

typeof "hello"; // string
typeof new String("hello"); // object
typeof String("hello"); // string
typeof new String("hello").valueOf(); // string

typeof 10; // number
typeof new Number(10); // object
typeof Number(10); // number
typeof new Number(10).valueOf(); // number

var hello = "hello";

hello.foo = "foo";
hello.foo; // undefined

var num = new Number(10);
var sum = 10 + num; // 20

num.foo = "foo";
num.foo; // foo

var value = new Boolean(false);

if (value) {
    alert("foo");
}