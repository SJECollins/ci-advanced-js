/**
 * To run this file in Gitpod, use the 
 * command node arrow-functions.js in the terminal
 */

// Vanilla JavaScript Function
function addTwoNumbers(a, b) {
   // Code block - executed when function called
   // Can add params in parenthesis after function name
   return a + b
}

let sum = addTwoNumbers(1, 7)
console.log(sum)

// Arrow Function With Parameters
/** Usually defined as constants so can't be overwritten
 * and must be defined before being called
 */
const addTwoNumbersTwo = (a, b) => {
  // Code block
  return a + b
}
let sumTwo = addTwoNumbersTwo(4, 9)
console.log(sumTwo)

// Single Line Arrow Function With Parameters
// Shortened syntax
const addTwoNumbersThree = (a, b) => a + b

let sumThree = addTwoNumbersThree(15, 29)
console.log(sumThree)

// Implicit Returns
const saySomething = message => console.log(message)

saySomething("Hello friend.")

const sayHello = () => console.log("Hello")
sayHello()

// Returning Multiple Lines
/** When an arrow function needs to return a multiline piece of code
 * parenthesis are required
*/
const returnMultipleLines = () => (
  `<p>
    This is a multiline string!
  <p>`
)

console.log(returnMultipleLines())
