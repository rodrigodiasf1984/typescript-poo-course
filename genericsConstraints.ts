//Generic Constraints
// If you remember from an earlier example, you may sometimes want to write a generic function that works on a set of types where you have some knowledge about what capabilities that set of types will have. In our loggingIdentity example, we wanted to be able to access the .length property of arg, but the compiler could not prove that every type had a .length property, so it warns us that we can’t make this assumption.

type TypeConstraints = {
  length: number
}

function loggingIdentity<
  Type extends {
    length: number
  }
>(arg: Type): Type {
  console.log(arg.length)
  return arg
}

const value: string = 'value'
value.length

loggingIdentity(value)
loggingIdentity([3, 34])
