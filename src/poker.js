class Poker {
  constructor () {
    this.pokerRanks = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A']
  }

  getSumOfNumbers (arr) {
    return arr.reduce((acc, num) => acc + this.pokerRanks.indexOf(num), 0)
  }

  createDataStructure (pair) {
    let pairs = []
    if (Array.isArray(pair.flat()[0])) {
      (pairs = pair.flat())
      return pairs
    }
    return pair
  }

  getWinner (...pair) {
    const pairsArr = this.createDataStructure(pair)
    let highestLength = 0
    const onlyPairs = Math.max(...pairsArr.filter((pair) => {
      return this.getSumOfNumbers(pair) / pair.length === this.pokerRanks.indexOf(pair[0])
    }).map(onlyPair => {
      highestLength = onlyPair.length > highestLength ? onlyPair.length : highestLength
      return onlyPair
    }).filter(onlyPair => {
      if (highestLength === 3 && onlyPair.length === 3) return onlyPair
      if (highestLength === 2 && onlyPair.length === 2) return onlyPair
      return false
    }).map(onlyPair => {
      return this.getSumOfNumbers(onlyPair)
    }))
    const result = Array(highestLength).fill(onlyPairs / highestLength).map(num => this.pokerRanks[num])
    return result
  }

  winningPair (...pair) {
    return this.getWinner(...pair)
  }

  winningPairFromArray (...pair) {
    return this.getWinner(...pair)
  }

  winning3CardHand (...pair) {
    return this.getWinner(...pair)
  }
}

module.exports = Poker
