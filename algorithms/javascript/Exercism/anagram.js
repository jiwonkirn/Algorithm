class Anagram {
    constructor(input) {
        this.key = input
    }

    matches(...rest){
        const arr = rest[0]
        return arr.filter(item => {
          return item.toLowerCase() !== this.key.toLowerCase() && 
                [...item.toLowerCase()].sort().join('') === 
                [...this.key.toLowerCase()].sort().join('')
        })
    }
}

export default  Anagram