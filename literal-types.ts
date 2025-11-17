//Literal Types
//In addition to the general types string and number, we can refer to specific strings and numbers in type positions.

// One way to think about this is to consider how JavaScript comes with different ways to declare a variable. Both var and let allow for changing what is held inside the variable, and const does not. This is reflected in how TypeScript creates types for literals.//

type Direction = 'left' | 'top' | 'right' | 'bottom'

function moveTo(direction: Direction) {
  switch (direction) {
    case 'left':
      console.log('move to left')
      break
    case 'right':
      console.log('move to right')
      break
    case 'top':
      console.log('move to to top')
      break
    case 'bottom':
      console.log('move to bottom')
      break
    default:
      console.log("I don't know where to go :(")
  }
}

moveTo('top')

type METHOD = 'GET' | 'POST'
declare function handleRequest(url: string, method: METHOD): void
const req: { url: string; method: METHOD } = {
  url: 'https://example.com',
  method: 'GET'
}
req.method = 'POST'
handleRequest(req.url, req.method)
