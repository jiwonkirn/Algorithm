// 방법1
function toRna(input) {
    const dna = ['G', 'C', 'T', 'A']
    const rna = ['C', 'G', 'A', 'U']
    if ( [...input].every(x => dna.some(y => x === y)) ) return input.split('').map(x => x = rna[dna.indexOf(x)]).join('')
    else throw new Error('Invalid input DNA.')
}

// 방법2
// const trans = {C:'G', G:'C', A:'U', T:'A'}
// const toRNA = function(strand) {
// 	return strand.split('').map(x => trans[x]).join('')
// }


export default toRna

