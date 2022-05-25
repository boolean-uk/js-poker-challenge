class Poker {

  constructor() {
    this.name = "Poker"
  }

  winningPair(pair1, pair2) {
    const isPair = p => p[0] === p[1]
    const higherCard = (p1, p2) => p1[0] > p2[0] ? p1 : p2
    return isPair(pair1) && isPair(pair2) ? higherCard(pair1, pair2) :
      isPair(pair1) ? pair1 : pair2
  }
}

module.exports = Poker
