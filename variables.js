// PART I:
// For each of the following variables we need to identify the data type:
// let age = 25; const name = "John"; var isStudent = true; let salary = 1500.75;
// const fruits = ["apple", "banana", "orange"]; let person = { name: "Alice", age: 30, isEmployed: true };

let age = 25;
console.log(typeof age);
const name = "John";
console.log(typeof name);
var isStudent = true;
console.log(typeof isStudent);
let salary = 1500.75;
console.log(typeof salary);
const fruits = ["apple", "banana", "orange"];
console.log(typeof fruits);
let person = { name: "Alice", age: 30, isEmployed: true };
console.log(typeof person);

// PART II:
// Now, it is time to write a function sumNumbers that takes an array of elements as input, returns and prints to the console the sum of all numeric elements in the array, the non-numeric elements should be ignored.
// For example:
// sumNumbers([10, "hello", 5, true, 8]) // should return 23

function sumNumbers(mixArray) {
    let sum = 0;
    mixArray.forEach(element => {
        if (typeof element == "number") {
            sum+=element;
        }
    });

    return sum;
}

var mixArray = [10, "hello", 5, true, 8];
var sum = sumNumbers(mixArray);
console.log(sum);