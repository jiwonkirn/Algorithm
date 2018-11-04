function isLeap(n) {
    return (n % 400 === 0) ? true :
    (n % 200 === 0) ? false :
    (n % 100 === 0) ? false : 
    (n % 4 === 0) ? true : false
}

export default isLeap