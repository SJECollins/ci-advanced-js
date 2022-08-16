/**
 * To run this file in Gitpod, use the 
 * command node reduce.js in the terminal
 */


// Summing an array of numbers:
let nums = [0, 1, 2, 3, 4]
let sum = nums.reduce((acc, curr) => {
  console.log(
    "Accumulator: ", acc,
    "Current value: ", curr,
    "Total: ", acc + curr
  )
  return acc + curr
})
console.log(sum)

// acc = accumulator, curr = current value
// can specify an initial value as well, best practice

let sum2 = nums.reduce((acc, curr) => acc + curr, 0)
console.log(sum2)

const teamMembers = [
  {
    name: 'Andrew',
    profession: 'Developer',
    yrsExperience: 5
  },
  {
    name: 'Ariel',
    profession: 'Developer',
    yrsExperience: 7
  },
  {
    name: 'Michael',
    profession: 'Designer',
    yrsExperience: 1
  },
  {
    name: 'Kelly',
    profession: 'Designer',
    yrsExperience: 3
  }
];

// Totaling a specific object property
let totalExp = teamMembers.reduce((acc, curr) => acc + curr.yrsExperience, 0)
console.log(totalExp)

// Grouping by a property, and totaling it too
let expByProf = teamMembers.reduce((acc, curr) => {
  let key = curr.profession
  if (!acc[key]) {
    acc[key] = curr.yrsExperience
  } else {
    acc[key] += curr.yrsExperience
  }
  return acc
}, {})

console.log(expByProf)