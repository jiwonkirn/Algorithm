class SpaceAge {
    constructor(input) {
        this.seconds = input
    }
    onEarth() {return parseFloat((this.seconds / 31557600).toFixed(2))}
    onMercury () {return parseFloat((this.seconds / (31557600 * 0.2408467) ).toFixed(2))}
    onVenus () {return parseFloat((this.seconds / (31557600 * 0.61519726) ).toFixed(2))}
    onMars () {return parseFloat((this.seconds / (31557600 * 1.8808158) ).toFixed(2))}
    onJupiter () {return parseFloat((this.seconds / (31557600 * 11.862615) ).toFixed(2))}
    onSaturn () {return parseFloat((this.seconds / (31557600 * 29.447498) ).toFixed(2))}
    onUranus () {return parseFloat((this.seconds / (31557600 * 84.016846) ).toFixed(2))}
    onNeptune () {return parseFloat((this.seconds / (31557600 * 164.79132) ).toFixed(2))}
}

export {SpaceAge}