export default class {
  constructor(input) {
    this.matrix = input
    this.rows = this.matrix.split('\n').map(x => x.split(' ').map(item => parseInt(item)))
    this.columns = this.rows[0].map((item, index) => this.rows.map(innerItem => innerItem[index]))
  }
}