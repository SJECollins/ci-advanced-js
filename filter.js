/**
 * To run this file in Gitpod, use the 
 * command node filter.js in the terminal
 */

// Similar to map. For filtering elements you don't need out of an array
// Uses callback function - test returning either true or false

// Simple Filtering
const people = [
  {
    name: 'Michael',
    age: 23,
  },
  {
    name: 'Lianna',
    age: 16,
  },
  {
    name: 'Paul',
    age: 18,
  },
];

const oldEnough = people.filter(person => person.age >= 21)
console.log(oldEnough)

const paul = people.filter(person => person.name === 'Paul')
console.log(paul)

const paul2 = people.filter(person => person.name === 'Paul')[0]
console.log(paul2)

// Complex Filtering
const students = [
  {
    id: 1,
    name: 'Mark',
    profession: 'Developer',
    skills: [
      { name: 'javascript', yrsExperience: 1 },
      { name: 'html', yrsExperience: 5 },
      { name: 'css', yrsExperience: 3 },
    ]
  },
  {
    id: 2,
    name: 'Ariel',
    profession: 'Developer',
    skills: [
      { name: 'javascript', yrsExperience: 0 },
      { name: 'html', yrsExperience: 4 },
      { name: 'css', yrsExperience: 2 },
    ]
  },
  {
    id: 3,
    name: 'Jason',
    profession: 'Designer',
    skills: [
      { name: 'javascript', yrsExperience: 1 },
      { name: 'html', yrsExperience: 1 },
      { name: 'css', yrsExperience: 5 },
    ]
  },
];

// One func
const candidates = students.filter(student => {
  let strongSkills = student.skills.filter(skill => skill.yrsExperience >= 5)
  return strongSkills.length > 0
})

console.log(candidates)

// Reusable strongSkills func
const hasStrongSkills = student => {
  let strongSkills = student.skills.filter(skill => skill.yrsExperience >= 5)
  return strongSkills.length > 0
}

const candidates2 = students.filter(hasStrongSkills)

console.log(candidates2)

// Separate funcs
const hasFiveYrs = skill => skill.yrsExperience >=5
const hasStrongSkills2 = student => student.skills.filter(hasFiveYrs).length > 0

const candidates3 = students.filter(hasStrongSkills2)

console.log(candidates3)

// Array of just names
let candNames = candidates3.map(cands => cands.name)
console.log(candNames)