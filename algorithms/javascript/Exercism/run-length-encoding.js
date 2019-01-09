function encode(input) {
    const result = []
    let count = 1
    const arr = input.split('')
    const arr2 = arr.map((item, index) => item === arr[index+1] ? item = 1 : item)
    for (const item of arr2) {
      if (typeof item === 'number') {
        count++
      } else {
        if (count > 1) result.push(count)
        result.push(item)
        count = 1
      }
    }
    return result.join('')
  }

  function decode(input) {
    const arr = [...input]
    const result = []
    const result2 = []
    let count = ''
    arr.forEach(item => {
      if (!Number.isNaN(parseInt(item))) {
        count += item
      } else {
        if (count !== '') result.push(parseInt(count))
        result.push(item)
        count = ''
      }
    })
    result.forEach((item, index) => {
      if (typeof item === 'number') {
        for (let i = 0; i < item-1; i++) {
          result2.push(result[index+1])
        }
      } else {
        result2.push(item)
      }
    })
    return result2.join('')
  }

export {encode, decode}