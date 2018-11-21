function validate(input) {
  const arr = input.toString().split('')
  const num = arr.length
  const result = arr.reduce((acc, item) =>  acc += (item ** num), 0)
  return result === input 
}

export {validate}