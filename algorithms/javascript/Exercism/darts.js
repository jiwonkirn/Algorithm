function solve(x, y) {
    const num = Math.max(x, y)
    return num > 10 ? 0 :
           num <= 10 && num > 5 ? 1 :
           num <= 5 && num > 1 ? 5 :
           num === 0 ? 10 : null
}

export default solve