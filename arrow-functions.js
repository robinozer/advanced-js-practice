/**
 * To run this file in Gitpod, use the 
 * command node arrow-functions.js in the terminal
 */

// Vanilla JavaScript Function
// function addTwoNumbers(a, b) {
//     //code block
//     return a + b;
// }
// let sum = addTwoNumbers(3, 5)
// console.log(sum);



// Arrow Function With Parameters

// const addTwoNumbers = (a, b) => {
//     //code block
//     return a + b;
// }
// let sum = addTwoNumbers(3, 5)
// console.log(sum);



// Single Line Arrow Function With Parameters
// Simplified with implicit return
// const addTwoNumbers2 = (a, b) => (a + b);    also valid way to write it
const addTwoNumbers2 = (a, b) => a + b;
let sum2 = addTwoNumbers2 (6, 7)
console.log(sum2)


// Implicit Returns with single or no parameters
// for even simpler functions with 1 parameter, leave off first set of parantheses
const saySomething = message => console.log(message);
saySomething('Hello Yellow')

// if you have a function without any parameters, you need to use empty brackets
const sayHello = () => console.log('hello');
sayHello();

// Returning Multiple Lines
// whenever an arrow function needs to return several lines of code, you have to include the second set of parantheses
// you also need to use the brackets when you call the function, e.g. for printing it

const returnMultipleLines = () => (
    `<p>
    This string has more than one line!
    Like so!
    </p>`
)
console.log(returnMultipleLines())

