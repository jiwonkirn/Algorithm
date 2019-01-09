export default class {
  constructor(input) {
    this.input = input
  }

  static verse(input) {
    if (input > 1) {
      return `${input} bottles of beer on the wall, ${input} bottles of beer.
Take one down and pass it around, ${input - 1} bottles of beer on the wall.
`
    } else if (input === 1) {
      return `${input} bottle of beer on the wall, ${input} bottle of beer.
Take it down and pass it around, no more bottles of beer on the wall.
`
    } else {
      return `No more bottles of beer on the wall, no more bottles of beer.
Go to the store and buy some more, 99 bottles of beer on the wall.
`
    }
  }

  static sing (start = 99, end = 0){
    const result = []
    for (let i = start; i >= end; i--) {
      if(i !== 0) {
        result.push(`${i} bottle${i === 1 ? '' : 's'} of beer on the wall, ${i} bottle${i === 1 ? '' : 's'} of beer.
Take ${i === 1 ? 'it' : 'one'} down and pass it around, ${i === 1 ? 'no more' : i - 1} bottle${i === 2 ? '' : 's'} of beer on the wall.
`)
      } else {
        result.push(`No more bottles of beer on the wall, no more bottles of beer.
Go to the store and buy some more, 99 bottles of beer on the wall.
`)    
      }
    }
    return result.join("\n")
  }
}