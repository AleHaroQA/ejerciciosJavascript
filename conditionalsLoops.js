// For this practice, we are going to write a JavaScript program that analyzes a given range of numbers and performs the following tasks:
// For each number in the range from 1 to 20 (inclusive):
// If the number is even, print the number followed by " is even."
// If the number is odd, print the number followed by " is odd."
// If the number is divisible by 5, print the number followed by " is divisible by 5."
// We should take into account the following instructions:
// Create a loop that iterates through the numbers from 1 to 20.
// Use conditional statements to determine if a number is even, odd, or divisible by 5.
// Print out the appropriate message based on the conditions.

// for (let i = 1; i <=20; i++) {
//     if (i % 5 == 0) {
//         console.log(i + " divisible by 5.")
//     }

//     if (i % 2 == 0) {
//         console.log(i + " is even.")
//     }else{
//         console.log(i + " is odd.")
//     }

// }

// PART II
// Now that we are able to join conditionals and loops together, create a program to determine if a given number is a prime number. Remember a number is considered prime when it is divisible only by itself and by 1.
// Tip: Use the Module operator to determine when a number is divisible by another.

// function primeNumber(num) {
//     let cont = 0;
//     for (let i = 1; i <= num; i++) {
//         if (num % i == 0) {
//             cont++;
//         }
//     }

//     if (cont == 2) {
//         console.log("It's a prime number");
//     } else {
//         console.log("It's NOT a prime number");
//     }

//primeNumber(7);
// }

function isPrime(num) {
    let bandera = true;

    for (let i = 2; i < num; i++) {
        if (num % i == 0) {
            bandera = false;
            break;
        }
    }

    return bandera;

}

console.log(isPrime(14));

// Part II
// function isPrime(num) {
//     let bandera = true;

//     if (typeof (num) == "number") {

//         for (let i = 2; i < num; i++) {

//             if (num % i == 0) {
//                 bandera = false;
//                 break;
//             }
//         }
//     } else {
//         bandera = undefined;
//     }

//     return bandera;
// }

// let numPrueba = 13;

// console.log(isPrime(numPrueba));