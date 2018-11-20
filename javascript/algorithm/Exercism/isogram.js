
function isIsogram(input) {
    if (input !== '') return true
    const a = input.toLowerCase().match(/[a-z]/ig).sort()
    const b = a.filter((item, index) => item !== a[index - 1])
    return a.length === b.length ? true : false

}

export { isIsogram } 
