/**
 * To run this file in Gitpod, use the 
 * command node destructuring.js in the terminal
 */
/**
 * Faster way to turn array of items into distinct individual items
 * Can do on single lines of code
 * Applies to objects too
 */

// Destructuring arrays
let ages = ["30", "26", "27"]
// let john = ages[0]
// let mary = ages[1]
// let joe = ages[2]
let [john, mary, joe] = ages
console.log(john, mary, joe)

// Destructuring objects
let jobs = {
  mike: "designer",
  jill: "developer",
  alicia: "accountant"
}
let {mike, jill, alicia} = jobs
console.log(mike, jill, alicia)

// Destructuring subsets
let languages = ["english", "french", "spanish", "german", "japanese"]
let [johnNative, johnSecondary] = languages
console.log(johnNative, johnSecondary)

let [, , maryNative, marySecondary] = languages
console.log(maryNative, marySecondary)

let languages2 = {
  firstLang: "english",
  secondLang: "french",
  thirdLang: "german",
  fourthLang: "japanese"
}

let {firstLang, thirdLang} = languages2
console.log(firstLang, thirdLang)

// Using rest parameter syntax
let fruits = ["apple", "orange", "banana", "peach", "cherry"]
let [favourite, secondFavourite, ...others] = fruits
console.log(favourite)
console.log(secondFavourite)
console.log(others)

let favouriteFoods = {
  brian: "pizza",
  anna: "pasta",
  sarah: "vegetarian",
  andrea: "steak"
}

let {brian, anna, ...rest} = favouriteFoods
console.log(brian)
console.log(anna)
console.log(rest)