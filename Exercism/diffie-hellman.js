export default class DiffieHellman {
  constructor(p, g) {
    if (!(this.judgePrime(p) && this.judgePrime(g))) {
      throw new Error();
    } else {
      this.p = p;
      this.g = g;
    }
  }

  judgePrime(input) {
    for (let i = 2; i < input; i++) {
      if (input % i === 0) {
        return false;
      } else return true;
    }
  }

  getPublicKeyFromPrivateKey(input) {
    if (2 > input || input >= this.p) {
      throw new Error();
    }
    return this.g ** input % this.p;
  }

  getSharedSecret(privateKey, publicKey) {
    return publicKey ** privateKey % this.p;
  }
}
