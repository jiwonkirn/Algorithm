function isPangram(input) {
    let result = true
    const alp = [...'abcdefghighlmnopqrstuvwxyz']
    const arr = input.toLowerCase().split('').filter(x => alp.some(y => x === y))
    alp.forEach(item => {
      if (!arr.some(x => x === item)) result = false
    })  
    return result
  }

export default isPangram