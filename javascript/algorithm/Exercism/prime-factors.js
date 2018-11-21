function primeFactors(input) {
    let primeNum = 2;
    const arr = []
    while (primeNum <= input) {
        if (input % primeNum === 0) {
            input /= primeNum;
            arr.push(primeNum)
            primeNum = 2
        } else {
            primeNum++
        }
    }
    return arr 
}

export { primeFactors }