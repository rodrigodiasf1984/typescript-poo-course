// Generics
// A major part of software engineering is building components that not only have well-defined and consistent APIs, but are also reusable. Components that are capable of working on the data of today as well as the data of tomorrow will give you the most flexible capabilities for building up large software systems.

// In languages like C# and Java, one of the main tools in the toolbox for creating reusable components is generics, that is, being able to create a component that can work over a variety of types rather than a single one. This allows users to consume these components and use their own types.

function identity<Type>(arg: Type): Type {
  return arg
}

const argString: string = 'value'

const value = identity(argString)
const value2 = identity(4)
const valu3 = identity(true)
