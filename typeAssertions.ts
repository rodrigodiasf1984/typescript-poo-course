//Type Assertions
//Sometimes you will have information about the type of a value that TypeScript can’t know about.

interface Person {
  firstName: string
  lastName: string
}

const value = { firstName: 'Rodrigo' } as Person

console.log(value.firstName)
