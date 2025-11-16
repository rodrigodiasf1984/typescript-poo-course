// I can redeclare and merge interfaces, and it is also more efficient when compiling.

interface Person {
  firstName: string
  lastName: string
}

interface User extends Person {
  email: string
}

const person: User = {
  firstName: 'Rodrigo',
  lastName: 'Dias',
  email: 'rodrigodiasf@gmail.com'
}

function getFullName(person: User): string {
  return `${person.firstName} ${person.lastName}`
}

const fullName = getFullName(person)
console.log(fullName)
