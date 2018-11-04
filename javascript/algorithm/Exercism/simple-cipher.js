class Cipher {
    constructor (key = undefined) {
        this.alp = [...'abcdefghijklmnopqrstuvwxyz']
        if(key == null) this.key = this.randomStr();
        else if(![...key].every(x => this.alp.some(y => y === x)) || key === '') throw new Error ('Bad key')
        else this.key = key
        }
    
    randomStr() {
      let arr = []
        for (let i = 0; i < 101; i++) {
            arr.push(this.alp[Math.floor(Math.random() * 26)])
        }
        return arr.join('')
      }

    encode(input) {
        return input.split('').map((item, index) => {
          return this.alp[(this.alp.indexOf(item) + this.alp.indexOf(this.key[index % this.key.length])) % this.alp.length]
        }).join('')
    }

    decode(input) {
        return input.split('').map((item, index) => {
          let idx = (this.alp.indexOf(item) - this.alp.indexOf(this.key[index]))
          if (idx < 0) idx += this.alp.length
            return this.alp[idx]
          }).join('')
    }
}

export default Cipher