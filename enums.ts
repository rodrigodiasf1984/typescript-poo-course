// Enums are one of the few features TypeScript has which is not a type-level extension of JavaScript.

// Enums allow a developer to define a set of named constants. Using enums can make it easier to document intent, or create a set of distinct cases. TypeScript provides both numeric and string-based enums.

enum Direction {
  'LEFT', // 0
  'TOP', // 1
  'RIGHT', // 2
  'BOTTOM' // 3
}

function moveTo(direction: Direction) {
  switch (direction) {
    case Direction.LEFT:
      console.log('move to left')
      break
    case Direction.RIGHT:
      console.log('move to right')
      break
    case Direction.TOP:
      console.log('move to to top')
      break
    case Direction.BOTTOM:
      console.log('move to bottom')
      break
    default:
      console.log("I don't know where to go :(")
  }
}

moveTo(Direction.TOP)
